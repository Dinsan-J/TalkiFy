import express from "express";
import { signup} from "../controllers/auth_control.js";
import { login } from "../controllers/auth_control.js";
import { logout } from "../controllers/auth_control.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);



router.post("/logout", logout);

export default router;