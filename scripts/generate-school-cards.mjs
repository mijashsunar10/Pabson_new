// Draws school profile cards (same layout as the existing screenshots) into
// public/school_profile/*.png, using public/principal-placeholder.svg as the photo.
// Afterwards run: node scripts/optimize-school-profiles.mjs
// Run: node scripts/generate-school-cards.mjs
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public/school_profile");
const fontDir = "/usr/pgadmin4/web/pgadmin/static/fonts"; // Roboto, matches the existing cards

// Make Roboto visible to librsvg without installing it system-wide.
const fcConf = path.join(os.tmpdir(), "school-cards-fonts.conf");
fs.writeFileSync(
  fcConf,
  `<?xml version="1.0"?><!DOCTYPE fontconfig SYSTEM "fonts.dtd"><fontconfig><include ignore_missing="yes">/etc/fonts/fonts.conf</include><dir>${fontDir}</dir></fontconfig>`
);
process.env.FONTCONFIG_FILE = fcConf;
const { default: sharp } = await import("sharp");

const schools = [
  { name: "Little Step Secondary School", rep: "Mr. Padam Bastakoti", designation: "Principal", address: "Pokhara-08", tel: "061525013", cell: "9856071400" },
  { name: "Nepal Adarsha Awasiya Vidyalaya", rep: "Mr. Shyam Shrestha", designation: "Founder-Principal", address: "Pokhara-29", tel: "061560360", cell: "9851116571" },
  { name: "New Model Academy", rep: "Mr. Laxman Pokhrel", designation: "Founder-Principal", address: "Pokhara-09", tel: "061537808", cell: "9856071500" },
  { name: "Nobel Secondary School", rep: "Mr. Ratnaman Gurung", designation: "Founder-Principal", address: "", tel: "", cell: "9856020043" },
  { name: "Pokhara Academy", rep: "Mr. Teertha Tamang", designation: "Principal", address: "", tel: "", cell: "9846061538" },
  { name: "Pokhara Multimodel Secondary School", rep: "Mr. Krishna Bahadur KC", designation: "Founder-Principal", address: "Pokhara-08", tel: "061585332", cell: "9856044878" },
  { name: "Shanti Nikunj Boarding Secondary School", rep: "Mr. Mohan Prasad Baral", designation: "Principal", address: "Pokhara-17", tel: "061460486", cell: "9846060548" },
  { name: "Tarapunja Education Academy", rep: "Mr. Raju Adhikari", designation: "Founder-Principal", address: "Pokhara-01", tel: "061539454", cell: "9856023147" },
  { name: "Tops Secondary School", rep: "Mr. Narayan Baral", designation: "Founder-Principal", address: "Pokhara-10", tel: "061528382", cell: "9846385823" },
  { name: "Well Known Academy", rep: "Mr. Anand Raj Adhikari", designation: "Principal", address: "Pokhara-15", tel: "", cell: "9856034076" },
  { name: "Happy Boarding School", rep: "Mr. Kabiraj Baral", designation: "Founder-Principal", address: "Pokhara-07", tel: "", cell: "9856037776" },
  { name: "Gurukul Bidhya Sadan", rep: "Mr. Bhuvan Subedi", designation: "Principal", address: "Pokhara-09", tel: "061528268", cell: "9856015887" },
  { name: "Gandaki Adarsha Academy", rep: "Mr. Krishna Prasad Sapkota", designation: "Founder-Principal", address: "Pokhara-13", tel: "", cell: "9856023803", email: "gandakiadarshaacademy@gmail.com" },
];

const W = 1120;
const H = 378;
const SCALE = 2; // render at 2x so text stays sharp after optimisation
const VALUE_X = 270;
const VALUE_MAX_WIDTH = 820 - VALUE_X;

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// Shrink bold uppercase text so long names fit before the photo.
function fitSize(text, base, letterSpacing = 0) {
  const width = text.length * (base * 0.58 + letterSpacing);
  return width <= VALUE_MAX_WIDTH ? base : Math.floor((base * VALUE_MAX_WIDTH) / width);
}

const placeholder = fs
  .readFileSync(path.join(root, "public/principal-placeholder.svg"), "utf8")
  .replace(/<svg[^>]*>/, "")
  .replace("</svg>", "");

function cardSvg(s) {
  const rows = [
    ["Name of School", s.name.toUpperCase(), "school"],
    ["Rpt. to PABSON", s.rep.replace(/^Mr\.\s*/, "").toUpperCase(), "rep"],
    ["Designation", s.designation],
    ["Address", s.address],
    ["Tel.", s.tel],
    ["Cell", s.cell],
    ["Email", s.email ?? ""],
    ["Website", s.website ?? ""],
  ];

  const text = rows
    .map(([label, value, kind], i) => {
      const y = 41 + i * 45.7;
      let valueEl;
      if (kind === "school") {
        const size = fitSize(value, 29);
        valueEl = `<text x="${VALUE_X}" y="${y}" font-size="${size}" font-weight="700" fill="#e5177e">${esc(value)}</text>`;
      } else if (kind === "rep") {
        const size = fitSize("Mr. " + value, 28, 1);
        valueEl = `<text x="${VALUE_X}" y="${y}" font-size="${size}" font-weight="700" letter-spacing="1" fill="#1d1d1f">Mr. ${esc(value)}</text>`;
      } else {
        valueEl = `<text x="${VALUE_X}" y="${y}" font-size="29" fill="#2b2b2b">${esc(value)}</text>`;
      }
      return `<text x="22" y="${y}" font-size="29" fill="#3a3a3a">${label}</text>
    <text x="244" y="${y}" font-size="29" fill="#3a3a3a">:</text>
    ${valueEl}`;
    })
    .join("\n    ");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W * SCALE}" height="${H * SCALE}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="0.55" stop-color="#f6f3fb"/>
      <stop offset="1" stop-color="#ebe4f5"/>
    </linearGradient>
    <clipPath id="photo"><rect x="840" y="25" width="248" height="322" rx="6"/></clipPath>
  </defs>
  <rect x="0" y="0" width="${W}" height="${H}" fill="#ffffff"/>
  <rect x="2" y="2" width="${W - 4}" height="${H - 4}" rx="14" fill="url(#bg)" stroke="#9b3fb5" stroke-width="3"/>
  <path d="M380 0 Q620 120 1118 60 V0 Z" fill="#ffffff" opacity="0.55"/>
  <path d="M300 378 Q560 250 1118 330 V378 Z" fill="#ffffff" opacity="0.45"/>
  <path d="M560 0 Q760 180 1118 150" fill="none" stroke="#ffffff" stroke-width="18" opacity="0.5"/>
  <g font-family="Roboto">
    ${text}
  </g>
  <rect x="840" y="25" width="248" height="322" rx="6" fill="#ffffff"/>
  <g clip-path="url(#photo)">
    <svg x="840" y="62" width="248" height="248" viewBox="0 0 200 200">${placeholder}</svg>
  </g>
  <rect x="840" y="25" width="248" height="322" rx="6" fill="none" stroke="#d6d0e0" stroke-width="2"/>
</svg>`;
}

for (const [i, school] of schools.entries()) {
  const file = `new-${String(i + 1).padStart(2, "0")}-${slug(school.name)}.png`;
  if (fs.existsSync(path.join(outDir, file))) continue; // keep already generated cards
  await sharp(Buffer.from(cardSvg(school))).png().toFile(path.join(outDir, file));
  console.log(file);
}
