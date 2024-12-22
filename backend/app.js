import express, { json, urlencoded } from "express";
import userRoutes from "./routes/user.routes.js";
import captainRoutes from "./routes/captain.routes.js"
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
app.use(json());
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/users", userRoutes);
app.use("/captains", captainRoutes);
app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});
export default app;
