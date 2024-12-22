import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { blackListTokenModel } from '../models/blackListToken.model.js';
import { captainModel } from "../models/captain.model.js";
//1.USER AUTHENTICATION MIDDLEWARE
export const authUser = async (req, res, next) => {
  const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const blackToken = await blackListTokenModel.findOne({ token });
  if (blackToken) {
    return res.status(401).json({ message: "Unauthorized recently log out" });
  }
  try {
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    const user = await userModel.findById(decode._id);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
//2.CAPTAIN AUTHENTICATION MIDDLEWARE
export const authCaptain = async (req, res, next) => {
  const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized1" });
  }
  const blackToken = await blackListTokenModel.findOne({ token });
  if (blackToken) {
    return res.status(401).json({ message: "Unauthorized2" });
  }
  try {
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    const captain = await captainModel.findById(decode._id);
    req.captain = captain;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized3" });

  }

};