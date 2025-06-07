import express from "express";
import dotenv from "dotenv";
import { connectToMongo } from "./config/mongoDb";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get("/api/health", (_, res) => {
  res.send("Servidor funcionando ✔️");
});

connectToMongo();

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
