import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import MovieRouter from "./routes/MovieRoute.js"
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT;
const DBConnect = process.env.MONGO;

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors())

app.use("/api/movies",MovieRouter)

app.use("/",(req,res)=>{
    res.json({message : "Welcome from NodeJS API"});})

mongoose.connect(DBConnect).then(()=>{
    console.log("DB_Connect");

}).catch((error)=>{
    console.log(error);
})

app.listen(port,(req,res)=>{
    console.log(`Server on port ${port}`);
})