import express  from "express";
import { getAllData, getOneData } from "../controllers/Controller.js";
const router = express.Router();

router.get('/', getAllData)
router.get('/:id', getOneData)

export default router;
