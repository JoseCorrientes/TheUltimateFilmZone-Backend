import { Router } from "express";
import {
  addFavorites,
  getFavorites,
  deleteFavorites,
} from "../controller/favorite.controller.js";
const router = Router();

router.post("/", addFavorites);
router.get("/", getFavorites);
router.delete("/", deleteFavorites);
export default router;
