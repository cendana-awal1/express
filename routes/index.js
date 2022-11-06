import express from "express";
import { getNilai,createNilai } from "../controllers/nilai.js";


const router = express.Router();

router.get("/", getNilai);
router.post("/", createNilai);

export default router;

