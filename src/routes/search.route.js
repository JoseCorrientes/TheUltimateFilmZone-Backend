import { Router } from "express";
import {
  searchList,
  searchCastMovie,
  searchTrailerMovie,
} from "../controller/search.controller.js";
const router = Router();

router.get("/", searchList);
router.get("/cast", searchCastMovie);
router.get("/trailer", searchTrailerMovie);

export default router;
