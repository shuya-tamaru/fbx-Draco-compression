import { Router } from "express";
import fsExtra from "fs-extra";
const convert = require("fbx2gltf");
const compress = require("gltf-pipeline");

const router = Router();

router.post("/", async (req, res) => {
  const { path, fileName }: { path: string; fileName: string } = req.body;

  //fbx => glb
  const inputPath = path + fileName + ".fbx";
  const outputPath = `${path + fileName}.glb`;
  await convert(inputPath, outputPath);

  // gltfPipeline glb => gltf
  const inputGlbFilePath = outputPath;
  const outputGlbFilePath = `${path + fileName}_converted.gltf`;
  const glbToGltf = compress.glbToGltf;
  const glb = fsExtra.readFileSync(inputGlbFilePath);
  await glbToGltf(glb).then(function (results: any) {
    fsExtra.writeJsonSync(outputGlbFilePath, results.gltf);
  });

  // gltfPipeline gltf => draco_compress
  const processGltf = compress.processGltf;
  const inputCompressFilePath = outputGlbFilePath;
  const compressFilePath = `C:\\Users\\81803\\dev\\three-projects\\grasshopper-three\\public\\model\\${fileName}_compress.gltf`;

  const gltf = fsExtra.readJsonSync(inputCompressFilePath);
  const options = {
    dracoOptions: {
      compressionLevel: 10,
    },
  };

  await processGltf(gltf, options).then(function (results: any) {
    fsExtra.writeJsonSync(compressFilePath, results.gltf);
  });

  res.status(200).json("compression_finished");
});

export default router;
