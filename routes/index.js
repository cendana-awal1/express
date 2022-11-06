import express from "express";
import { getNilai,createNilai,updateNilai,getNilaiById } from "../controllers/nilai.js";


const router = express.Router();

router.get("/", getNilai);
router.get("/:id", getNilaiById);
router.post("/", createNilai);
router.patch("/:id", updateNilai);

export default router;

