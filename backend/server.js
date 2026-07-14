import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

import connectDatabase from "./config/database.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();

connectDatabase();

app.use(cors());

app.use(express.json({
    limit: "10mb"
}));

app.use(express.urlencoded({
    extended: true
}));

app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        project: "Zorvexa",
        version: "1.0.0",
        api: "/api"
    });
});

app.use("/api/auth", authRoutes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});

app.use((err, req, res, next) => {
    console.error(err);

    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server
