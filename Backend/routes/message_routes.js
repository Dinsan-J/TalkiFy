import express from "express";
import { getMessages, sendMessage } from "../controllers/message_control.js";
import protectRoute from "../middleware/protect_Route.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

export default router;
