import { validationResult } from "express-validator";
import { createUser } from "../services/user.service.js";
import userModel from "../models/user.model.js";
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
