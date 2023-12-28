import express from "express";
import compressionRouter from "./router/compression";
import webpRouter from "./router/webp";

const app = express();
const port = 3001;

app.use(express.json());
app.use("/api/compression", compressionRouter);
app.use("/api/webp", webpRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
