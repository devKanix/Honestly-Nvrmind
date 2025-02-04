import { UserService } from "../services/index.js";
import { StatusCodes } from "http-status-codes";

const userService = new UserService();

const signUp = async(req, res) => {
    try {
        const reqData = {
            email: req.body.email,
            password: req.body.password,
        }
        if(!reqData.email || !reqData.password) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                success: false,
                message: "Name, email, Password must be provided for a User Creation."
            });
        }
        const newUser = await userService.signUp(reqData);
        
        return res.status(StatusCodes.CREATED).json({
            success: true,
            data: newUser,
            message: "Successfully Created a User.",
            err: {}
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            success: false,
            data: {},
            message: error.message,
            err: error.explanation
        });
    }
}

const signIn = async(req, res) => {
    try {
        const reqData = {
            email: req.body.email,
            password: req.body.password,
        }
        const token = await userService.signIn(reqData);
        
        return res.status(StatusCodes.OK).json({
            success: true,
            data: token,
            message: "User sign in successfully",
            err: {}
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            success: false,
            data: {},
            message: error.message,
            err: error.explanation
        });
    }
}

export default {
    signUp,
    signIn
}