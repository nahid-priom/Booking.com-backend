import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello my name is priom");
});
router.get("/register", (req, res) => {
    res.send("Hello my name is Register priom");
  });

export default router;
