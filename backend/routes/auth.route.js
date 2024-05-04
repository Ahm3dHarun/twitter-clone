import express from "express";
import {
  signup,
  login,
  logout,
  getMe,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";
const router = express.Router();

// gets user profile, protectRoute is a middleware that attaches user object to request for later utilization
router.get("/me", protectRoute, getMe);

// allows user to sign up
router.post("/signup", signup);

// allows user to login
router.post("/login", login);

// allows user to logout
router.post("/logout", logout);

export default router;
