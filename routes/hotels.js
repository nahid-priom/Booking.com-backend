import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utilis/error.js";
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utilis/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/",verifyAdmin, createHotel);

//UPDATE

router.put("/:id",verifyAdmin, updateHotel);
//DELETE

router.delete("/:id",verifyAdmin, deleteHotel);
//GET
router.get("/:id", getHotel);
//GETALL

router.get("/", getAllHotel);

export default router;
