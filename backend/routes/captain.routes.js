import express from 'express';
import { body } from 'express-validator';
import { registerCaptain } from '../controllers/captain.controller.js';
const router = express.Router()
//1.ROUTE TO REGISTER CAPTAIN
router.post("/register",
    [body("email").isEmail().withMessage("Email is not valid"),
    body("fullname.lastname").isLength({ min: 3 }).withMessage("lastname should be 3 char long"),
    body("password").isLength({ min: 3 }).withMessage("password mnust be atleast 3 digit long"),
    body("fullname.firstname").isLength({ min: 3 }).withMessage("firstname should be atleat 3 char long"),
    body("vehicle.color").isLength({ min: 3 }).withMessage("color must be atleat 3 char long"),
    body("vehicle.plate").isInt({ min: 1 }).withMessage("plate no must be atleat 1 number"),
    body("vehicle.capacity").isInt({ min: 1 }).withMessage("must be one char long  "),
    body("vehicle.vehicleType").isIn(["car", "motercycle", "auto"]).withMessage("Invalid option"),
    ]
    , registerCaptain
)
export default router;