import express from "express";
import router from "./routes/index.route.js";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./config/dbConnection.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: "*" }));
app.use(morgan("dev"));

app.use(express.json());
app.use("/", router);

function main() {
  app.listen(PORT, () => {
    console.log(`Server si listening on port ${PORT}`);
  });
  connectDB();
}

main();
