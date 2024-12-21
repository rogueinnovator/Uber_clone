import express from "express";
import { body } from "express-validator";
import { loginUser, logOutUser, registerUser } from "../controllers/user.controller.js";
import { authUser } from "../middlewares/auth.middleware.js";
import { getUserProfile } from "../controllers/user.controller.js";
const router = express.Router();
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Email is not valid"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  registerUser
);
router.post(
  "/login",
  [body("email").isEmail().withMessage("Email is not valid")],
  loginUser
);
router.get("/profile", authUser, getUserProfile);
router.get("/logout", logOutUser)
export default router;
