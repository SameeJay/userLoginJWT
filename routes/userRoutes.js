import express from "express";
import { register, login } from "../controllers/authController.js";
import { getAllUsers } from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/users", authMiddleware, getAllUsers);

export { router };
