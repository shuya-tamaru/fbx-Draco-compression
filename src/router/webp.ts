import { Router } from "express";
import sharp from "sharp";

const router = Router();
//compress png to webp
router.get("/", async (req, res) => {
  const path = "C:\\Users\\81803\\Desktop\\comp\\";
  const inputPath = path + "test2" + ".png";
  const outputPath = path + "test2" + ".webp";
  await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
  res.status(200).json("compression_finished");
});

export default router;
