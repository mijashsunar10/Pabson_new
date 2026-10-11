// Creates small WebP copies of the site images next to the originals
// (e.g. public/team/Mr. KHIM GURUNG.png -> public/team/Mr. KHIM GURUNG.webp).
// The site references the .webp files; the originals are kept as source files.
// Also writes a 1200x630 JPEG for social sharing and a small PNG icon.
// School profile images have their own script: scripts/optimize-school-profiles.mjs
// Run: node scripts/optimize-images.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pub = path.join(root, "public");

// [path inside public/ (file or folder), max width in px, WebP quality]
const targets = [
  ["heroslider", 1920, 72],
  ["headerimage", 1920, 72],
  ["English_Language_contest", 1600, 75],
  ["Orientation_Program_for_School_Teachers", 1600, 75],
  ["Chess_competition", 1600, 75],
  ["Nepali_Language_Skills_Competition", 1600, 75],
  ["team", 480, 80],
  ["placeholder_member.png", 480, 80],
  ["image.png", 900, 80],
  ["logo/logo.jpeg", 240, 85],
];

const isImage = (f) => /\.(png|jpe?g)$/i.test(f);
const toWebp = (f) => f.replace(/\.(png|jpe?g)$/i, ".webp");

let before = 0;
let after = 0;
for (const [target, width, quality] of targets) {
  const abs = path.join(pub, target);
  const files = fs.statSync(abs).isDirectory()
    ? fs.readdirSync(abs).filter(isImage).map((f) => path.join(abs, f))
    : [abs];
  for (const input of files) {
    const output = toWebp(input);
    await sharp(input)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality })
      .toFile(output);
    before += fs.statSync(input).size;
    after += fs.statSync(output).size;
  }
}

await sharp(path.join(pub, "headerimage/BannerImage.jpg"))
  .resize(1200, 630, { fit: "cover" })
  .jpeg({ quality: 80, mozjpeg: true })
  .toFile(path.join(pub, "headerimage/og-image.jpg"));
await sharp(path.join(pub, "logo/logo.jpeg"))
  .resize(192, 192, { fit: "cover" })
  .png()
  .toFile(path.join(pub, "logo/icon-192.png"));

const mb = (n) => (n / 1024 / 1024).toFixed(1) + " MB";
console.log(`Images: ${mb(before)} -> ${mb(after)} as WebP`);
