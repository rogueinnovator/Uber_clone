import express from "express";
import { body } from "express-validator";
import { loginUser, logOutUser, registerUser } from "../controllers/user.controller.js";
import { authUser } from "../middlewares/auth.middleware.js";
import { getUserProfile } from "../controllers/user.controller.js";
const router = express.Router();
//1.REGISTER ROUTE
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Email is not valid"),
    body("fullname.firstName")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  registerUser
);
//2.LOGIN ROUTE
router.post(
  "/login",
  [body("email").isEmail().withMessage("Email is not valid")],
  loginUser
);
//3.GET USER PROFILE ROUTE
router.get("/profile", authUser, getUserProfile);
//4.LOGOUT ROUTE
router.get("/logout", logOutUser)
export default router;
