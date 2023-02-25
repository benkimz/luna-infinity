import express from "express";
import urlrouter from "./routes/urls.js";
import getrouter from "./routes/url-get.js";
import connectDB from "./config/db.js";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });

connectDB();

const app = express();

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use("/", getrouter);
app.use("/api", urlrouter);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
