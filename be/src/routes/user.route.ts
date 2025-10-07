import express from "express";
import { createUser , loginUser , logoutCurrentUser } from "../controllers/user.controller";

const router = express.Router();

router.route("/").post(createUser);   
router.post("/auth",loginUser)
router.post("/auth",logoutCurrentUser)

export default router;