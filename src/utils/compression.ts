import { createEncoderModule } from "draco3d";
import fs from "fs";
import { encode } from "punycode";

export async function compressModel(
  inputFilePath: string,
  outputFilePath: string
) {
  const encoder = createEncoderModule();
  const inputData = fs.readFileSync(inputFilePath);
}
//   inputFilePath: string,
//   outputFilePath: string
// ) {
//   const encoder = new draco3d.Encoder();
//   const mesh = new draco3d.Mesh();

//   // Load the .obj file
//   const objData = fs.readFileSync(inputFilePath, "utf-8");

//   // Convert the .obj file to a draco mesh
//   const builder = new draco3d.MeshBuilder();
//   const dracoMesh = builder.FromOBJ(objData);

//   // Set the draco mesh to the encoder
//   mesh.SetFromDracoMesh(dracoMesh);

//   // Compress the draco mesh
//   const encodedData = new draco3d.DracoInt8Array();
//   encoder.EncodeMeshToDracoBuffer(mesh, encodedData);

//   // Write the compressed data to a file
//   fs.writeFileSync(outputFilePath, Buffer.from(encodedData), "binary");
