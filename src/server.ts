import express from "express";
import compressionRouter from "./router/compression";

const app = express();
const port = 3001;

app.use(express.json());
app.use("/api/compression", compressionRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
