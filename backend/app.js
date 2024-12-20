import express, { json, urlencoded } from "express";
import userRoutes from "./routes/user.routes.js";
import cors from "cors";
const app = express();
app.use(json());
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use("/users", userRoutes);
app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});
export default app;
