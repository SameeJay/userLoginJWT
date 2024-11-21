import express from "express";
import { register, login } from "../controllers/authController.js";
import { getAllUsers } from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", register); //Set the (/register) route for "register" function

router.post("/login", login); //Set the (/login) route for "login" function

router.get("/users", authMiddleware, getAllUsers); //Set the (/users) route for "authMiddleware" middleware and then "getAllUsers" function

export { router };
