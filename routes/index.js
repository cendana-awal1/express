import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World!");
  });
router.post("/", (req, res) => {
    res.send("welcome to post");
  });

export default router;

