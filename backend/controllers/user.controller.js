import { validationResult } from "express-validator";
import { createUser } from "../services/user.service.js";
import userModel from "../models/user.model.js";
import { blackListTokenModel } from "../models/blackListToken.model.js";
//1.REGISTER CONTROLLER
export const registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullname, email, password } = req.body;
  const isUserExist = await userModel.findOne({ email });
  if (isUserExist) {
    return res
      .status(400)
      .json({ message: "A user with this email already exist" });
  }
  const hashPassword = await userModel.hashPassword(password);
  const token = user.generateAuthToken();
  const user = await createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashPassword,
  });
  res.status(201).json({ token, user });
};
//2.LOGIN CONTROLLER
export const loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).select("+password");
  const isMatch = user.comparePassword(password);
  if (!isMatch || !user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  res.cookie("token", token); //when working in the production enviroment we have to set the httponly to true because it will make the cookie inaccessible to javascript on the client side which will prevent the cross site scripting attack
  const token = await user.generateAuthToken();
  return res.status(200).json({ token, user });
};
//3.GET USER PROFILE CONTROLLER
export const getUserProfile = async (req, res) => {
  res.status(200).json({ user: req.user });
};
//4.LOGOUT CONTROLLER
export const logOutUser = async (req, res) => {
  const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];
  res.clearCookie("token");
  await blackListTokenModel.create({ token });
  res.status(200).json({ message: "User logged out successfully" });
};
