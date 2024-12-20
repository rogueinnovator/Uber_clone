import app from "./app.js";
import { createServer } from "http";
import { configDotenv } from "dotenv";
configDotenv();
const PORT = process.env.PORT || 3000;
const server = createServer(app);
server.listen(3000, () => {
  console.log("Server listening on port :", PORT);
});