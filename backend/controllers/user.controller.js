import { validationResult } from "express-validator";
import { createUser } from "../services/user.service.js";
import userModel from "../models/user.model.js";
import { blackListTokenModel } from "../models/blackListToken.model.js";
export const registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullname, email, password } = req.body;
  const hashPassword = await userModel.hashPassword(password);

  const user = await createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashPassword,
  });
  const token = user.generateAuthToken();
  res.status(201).json({ token, user });
};
export const loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = await user.generateAuthToken();
  res.cookie("token", token)//when working in the production enviroment we have to set the httponly to true because it will make the cookie inaccessible to javascript on the client side which will prevent the cross site scripting attack 
  res.status(200).json({ token, user });
};
export const getUserProfile = async (req, res) => {
  res.status(200).json(req.user);
};
export const logOutUser = async (req, res) => {
  res.clearCookie("token")
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  await blackListTokenModel.create({ token });
  res.status(200).json({ message: "User logged out successfully" })

}
