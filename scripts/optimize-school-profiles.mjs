// Converts public/school_profile/*.png into small WebP files for fast loading:
//   public/school_profile/optimized/full/<id>-<hash>.webp  (lightbox)
//   public/school_profile/optimized/thumb/<id>-<hash>.webp (grid)
// and rewrites data/schoolProfiles.ts with the new paths and image sizes.
// Order is taken from the existing data file; PNGs not listed there are appended,
// and exact duplicate images are skipped.
// Run: node scripts/optimize-school-profiles.mjs
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = path.join(root, "public/school_profile");
const outDir = path.join(srcDir, "optimized");
const dataFile = path.join(root, "data/schoolProfiles.ts");

const FULL_MAX_WIDTH = 1400;
const THUMB_WIDTH = 600;

const hash = (buf) => crypto.createHash("md5").update(buf).digest("hex").slice(0, 8);

const source = fs.readFileSync(dataFile, "utf8");
const start = source.indexOf("= [") + 2;
const existing = JSON.parse(source.slice(start, source.lastIndexOf("]") + 1));

const onDisk = fs.readdirSync(srcDir).filter((f) => f.toLowerCase().endsWith(".png"));
const listed = existing.map((e) => e.fileName).filter((f) => onDisk.includes(f));
const ordered = [...listed, ...onDisk.filter((f) => !listed.includes(f)).sort()];

// Skip byte-identical duplicates (e.g. "... 13-12-34-1.png").
const seen = new Set();
const files = ordered.filter((f) => {
  const hash = crypto.createHash("md5").update(fs.readFileSync(path.join(srcDir, f))).digest("hex");
  if (seen.has(hash)) return false;
  seen.add(hash);
  return true;
});

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(path.join(outDir, "full"), { recursive: true });
fs.mkdirSync(path.join(outDir, "thumb"), { recursive: true });

const profiles = [];
for (const [i, fileName] of files.entries()) {
  const id = i + 1;
  const input = path.join(srcDir, fileName);

  // Content hash in the file name: a changed image gets a new URL, so browsers
  // never show a stale cached copy (see Cache-Control rules in public/.htaccess).
  const fullBuf = await sharp(input)
    .resize({ width: FULL_MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toBuffer({ resolveWithObject: true });
  const thumbBuf = await sharp(input)
    .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
    .webp({ quality: 75 })
    .toBuffer({ resolveWithObject: true });
  const fullName = `${id}-${hash(fullBuf.data)}.webp`;
  const thumbName = `${id}-${hash(thumbBuf.data)}.webp`;
  fs.writeFileSync(path.join(outDir, "full", fullName), fullBuf.data);
  fs.writeFileSync(path.join(outDir, "thumb", thumbName), thumbBuf.data);
  const full = fullBuf.info;
  const thumb = thumbBuf.info;

  profiles.push({
    id,
    fileName,
    src: `/school_profile/optimized/full/${fullName}`,
    thumb: `/school_profile/optimized/thumb/${thumbName}`,
    rawSrc: `/school_profile/${fileName}`,
    width: full.width,
    height: full.height,
    thumbWidth: thumb.width,
    thumbHeight: thumb.height,
    title: `School Profile ${id}`,
  });
}

const header = `export interface SchoolProfile {
  id: number;
  fileName: string;
  src: string;
  thumb: string;
  rawSrc: string;
  width: number;
  height: number;
  thumbWidth: number;
  thumbHeight: number;
  title: string;
}

export const schoolProfiles: SchoolProfile[] = `;

fs.writeFileSync(dataFile, header + JSON.stringify(profiles, null, 2) + ";\n");
console.log(`Optimized ${profiles.length} school profile images.`);
