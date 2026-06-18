import Jimp from "jimp";

const SRC = "C:/Users/devv00/Downloads/mughal/";
const OUT = "public/doctors/";

// crop = [xFrac, yFrac, wFrac, hFrac] of the source image; null = no crop
const jobs = [
  { in: "WhatsApp Image 2026-06-17 at 8.53.24 PM.jpeg", out: "dr-faizan-rasheed.jpg", crop: [0.06, 0.42, 0.32, 0.37] }, // B&W face, left of poster
  { in: "WhatsApp Image 2026-06-17 at 8.53.25 PM.jpeg", out: "dr-ishrat-faizan.jpg",  crop: [0.605, 0.255, 0.315, 0.225] }, // inside the oval (skip blue ring)
  { in: "WhatsApp Image 2026-06-17 at 8.53.23 PM (2).jpeg", out: "portrait-teal.jpg", crop: [0.12, 0.04, 0.74, 0.50] }, // full-body -> upper/face
];

for (const j of jobs) {
  const img = await Jimp.read(SRC + j.in);
  const W = img.bitmap.width, H = img.bitmap.height;
  if (j.crop) {
    const [xf, yf, wf, hf] = j.crop;
    img.crop(Math.round(xf * W), Math.round(yf * H), Math.round(wf * W), Math.round(hf * H));
  }
  if (img.bitmap.width > 640) img.resize(640, Jimp.AUTO);
  await img.writeAsync(OUT + j.out);
  console.log("OK", j.out, `${img.bitmap.width}x${img.bitmap.height}  (src ${W}x${H})`);
}
