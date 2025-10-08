import express from "express";
import { createUser , loginUser , logoutCurrentUser, getCurrentUserData , getAllUsers, updateProfile} from "../controllers/user.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = express.Router();

router.route("/").post(createUser).get(authenticate, getAllUsers);
router.post("/auth",loginUser)
router.post("/auth",logoutCurrentUser)
router.route('/profile').get(authenticate, getCurrentUserData).put(authenticate, updateProfile)


export default router;