import { Router } from "express";
import { categoryMovies } from "../controller/category.controller.js";

const router = Router();

router.get("/movies", categoryMovies);

export default router;
