import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import PanggilanRoute from "./routes/PanggilanRoute.js" 
dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());
app.use(PanggilanRoute);

app.listen(process.env.APP_PORT, ()=>{
    console.log('Aplikasi Sedang berjalan....');
});