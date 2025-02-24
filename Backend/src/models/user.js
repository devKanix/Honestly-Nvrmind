import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import { SALT } from "../config/serverConfig.js";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minLength: [8, "Password Cannot have less then 8 Characters"],
        maxLength: [25, "Password Can't be too long."]
    },

    name: {
        type: String,
        required: true
    },

    googleId: { 
        type: String, 
        unique: true, 
        sparse: true
    },

    githubId: { 
        type: String, 
        unique: true, 
        sparse: true
    }
}, {timestamps: true});

userSchema.pre('save', function (next) {
    const encryptedPassword = bcrypt.hashSync(this.password, SALT);
    this.password = encryptedPassword;
    next();
});

const User = mongoose.model('User', userSchema);

export default User;