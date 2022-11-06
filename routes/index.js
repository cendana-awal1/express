import express from "express";
import { getNilai,createNilai,updateNilai,getNilaiById,deleteNilai } from "../controllers/nilai.js";


const router = express.Router();

router.get("/", getNilai);
router.get("/:id", getNilaiById);
router.post("/", createNilai);
router.patch("/:id", updateNilai);
router.patch("/:id", deleteNilai);

export default router;

