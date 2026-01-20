import { Router } from "express";
import { getUsers, createUser } from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", authMiddleware, getUsers);
router.post("/", authMiddleware, createUser);

export default router;
