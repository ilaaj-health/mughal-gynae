import Jimp from "jimp";

const SRC = "C:/Users/devv00/Downloads/mughal/";
const OUT = "public/doctors/";

// crop = [xFrac, yFrac, wFrac, hFrac]; null = no crop
const jobs = [
  { in: "doc isharat faisal.jpeg", out: "dr-ishrat-faizan.jpg", crop: [0.05, 0.0, 0.9, 0.5] }, // clean half-body -> head & shoulders
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
