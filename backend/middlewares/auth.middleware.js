import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { blackListTokenModel } from '../models/blackListToken.model.js';

export const authUser = async (req, res, next) => {
  const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const blackToken = await blackListTokenModel.findOne({ token });
  console.log(blackToken);

  if (blackToken) {
    return res.status(401).json({ message: "Unauthorized recenly log out" })
  }
  try {
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    const user = await userModel.findById(decode._id);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ messgae: "Unauthorized" });
  }
};
