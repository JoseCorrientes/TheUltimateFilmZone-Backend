import { Router } from "express";
import searchList from "./search.route.js";
import favorite from "./favorite.route.js";
import category from "./category.route.js";
import sendMail from "./email.route.js";

const router = Router();

router.use("/search", searchList);
router.use("/favorites", favorite);
router.use("/category", category);
router.use("/email", sendMail);
router.use('/test', (req, res)=>{
    res.status(200).json({status: 'ok', message: 'El server is on'})
})

export default router;
