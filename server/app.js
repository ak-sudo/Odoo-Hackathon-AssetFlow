import express from "express";
import cors from "cors";
import authRoutes from "./Routes/authRoutes"

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "AssetFlow API Running"
    });
});

app.use("/app/auth",authRoutes)

export default app;