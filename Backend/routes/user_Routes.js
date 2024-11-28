import express from "express";
import protectRoute from "../middleware/protect_Route.js";
import { getUsersForSidebar } from "../controllers/user_controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);

export default router;
