import express, { json } from "express";
import cors from "cors";
const app = express();
app.use(json());
app.use(cors());
app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});
export default app;
