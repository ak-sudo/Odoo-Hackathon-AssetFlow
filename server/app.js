const express =  require( "express");
const cors =  require( "cors");
const authRoutes =  require("./Routes/authRoutes")

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("chfuehfuefh")
});
app.use("/app/auth",authRoutes)

module.exports= app;