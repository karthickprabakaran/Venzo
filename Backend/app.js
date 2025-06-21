import express from "express";
import router from "./routes/feedbackRoutes.js";
import connectDB from "./utils/db.js";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", router);



export default app;
