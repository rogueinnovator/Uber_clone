import { validationResult } from "express-validator";
import { captainModel } from "../models/captain.model.js";
import { createCaptain } from "../services/captain.service.js";
import { blackListTokenModel } from "../models/blackListToken.model.js";
//1.REGISTER CAPTAIN
export const registerCaptain = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullName, email, password, vehicle } = req.body;
    const isCaptainExist = await captainModel.findOne({ email });
    if (isCaptainExist) {
        return res.status(400).json({ message: "A captain with this email already exist" });
    }
    const hashedPassword = await captainModel.hashPassword(password);
    const captain = await createCaptain({
        firstname: fullName.firstName,
        lastname: fullName.lastName,
        email,
        password: hashedPassword,
        color: vehicle.vehicleColor,
        plate: vehicle.vehiclePlate,
        capacity: vehicle.vehicleCapacity,
        vehicleType: vehicle.vehicleType
    });
    const token = await captain.generateAuthToken();
    console.log("this is token", token);

    res.status(201).json({ captain, token });
};
//2.LOGIN CAPTAIN
export const logInCaptain = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const captain = await captainModel.findOne({ email }).select("+password");
    const isMatch = await captain.comparePassword(password);
    if (!isMatch || !captain) {
        return res.status(401).json({ message: "invalid credentials" });
    }
    const { password: _, ...captainWithOutPass } = captain.toObject();
    const token = await captain.generateAuthToken();
    res.cookie("token", token);
    return res.status(200).json({ token, captain: captainWithOutPass });

};
//3.CAPTAIN PROFILE CONTROLLER 
export const getCaptainProfile = async (req, res) => {
    return res.status(200).json({ captain: req.captain });
};
//4.LOGOUT CAPTAIN 
export const logOutCaptain = async (req, res) => {
    const token = req.cookies?.token || req.headers.Authorization?.split(" ")[1];
    if (token) {
        res.clearCookie("token");
        await blackListTokenModel.create({ token });
        return res.status(200).json({ message: "User logged successful" });
    }
    else {
        return res.status(404).json({ message: "Already logout" });

    }
};