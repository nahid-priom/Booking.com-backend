import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utilis/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("hello user, You are logged in")
// })
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("hello user, You are logged in and you can delete all account")
// })
//UPDATE

router.put("/:id",verifyUser, updateUser);
//DELETE

router.delete("/:id", verifyUser,deleteUser);
//GET
router.get("/:id",verifyUser, getUser);
//GETALL

router.get("/",verifyAdmin, getUsers);

export default router;
