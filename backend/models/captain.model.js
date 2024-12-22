import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minLength: [3, "First name must be at least 3 characters long"]
        },
        lastname: {
            type: String,
            required: true,
            minLength: [3, "Last name must be at least 3 characters long"]
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    sockedId: {
        type: String
    },
    status: {
        type: String,
        enum: ["active", "inactive"],//enum can be defined as an array of strings that will be used to validate the value of the field
        default: "inactive"
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minLength: [3, "Color must be at least 3 characters long"]
        },
        plate: {
            type: String,
            required: true,
            minLength: [3, "Plate must be at least 3 characters long"]
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, "Capacity must be at least 1"]
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ["car", "motorcycle", "auto"]
        }
    },
    location: {
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        }
    }
});
captainSchema.methods.generateAuthToken = async function () {//(this method witll perform async  operation)
    const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY, { expiresIn: "24h" });
    return token;
};
captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};
captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};
export const captainModel = mongoose.model("Captain", captainSchema);//(the Captin is the name of the collection in the database)
//instnce methods are only invoked on the specific instance of a class while the static methods belong to the whole class