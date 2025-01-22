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
  const { fullName, email, password } = req.body;
  console.log(fullName);
  const isUserExist = await userModel.findOne({ email });
  if (isUserExist) {
    return res
      .status(400)
      .json({ message: "A user with this email already exist" });
  }
  const hashPassword = await userModel.hashPassword(password);

  const user = await createUser({
    firstname: fullName.firstName,
    lastname: fullName.lastName,
    email,
    password: hashPassword,
  });
  const token = user.generateAuthToken();
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
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = await user.generateAuthToken();
  const { password: _, ...userWithOutPass } = user.toObject();
  return res.status(200).json({
    token, user: userWithOutPass
  });
};
//3.GET USER PROFILE CONTROLLER

export const getUserProfile = async (req, res) => {
  res.status(200).json({ user: req.user });
};
//4.LOGOUT CONTROLLER
export const logOutUser = async (req, res) => {
  const token = req.cookies?.token || req.headers.Authorization?.split(" ")[1];
  res.clearCookie("token");
  await blackListTokenModel.create({ token });
  res.status(200).json({ message: "User logged out successfully" });
};
