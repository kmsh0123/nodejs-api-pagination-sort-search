import express from "express";
import { getMovies, postMovies } from "../controller/MovieController.js";

const router = express.Router();

router.get("/",getMovies)

router.post("/",postMovies)

export default router;