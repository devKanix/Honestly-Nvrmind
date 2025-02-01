import { UserRepository } from "../repository/index.js";
import bcrypt from 'bcrypt';
import Token from "../utils/tokenHelper.js";
import { AppError, ServiceError } from "../utils/errors/index.js";
import { StatusCodes } from "http-status-codes";

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }
    
    //Creation of the new user.
    async signUp(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            if(error.name == "RepositoryError" || error.name == "ValidationError" || error.name == "ClientError") {
                throw error;
            }
            throw new ServiceError();
        }
    }

    async signIn(data) {
        try {
            const user = await this.userRepository.findBy(data.email);
            if(!user) {
                throw new AppError(
                    "UserNotFound",
                    "User Not Available",
                    "You aren't registred. Firstly Create a account",
                    StatusCodes.NOT_FOUND
                );
            }

            const encryptedPassword = user.password;
            const passwordMatch = this.verifyPassword(data.password, encryptedPassword);
            if(!passwordMatch) {
                throw new AppError(
                    "PasswordError",
                    "Password Verification Failed",
                    "Password you entered didn't matched. Please try again.",
                    StatusCodes.UNPROCESSABLE_ENTITY
                );
            }
            
            const newJWT = Token.createToken({email: user.email, id: user.id});
            return newJWT;
        } catch (error) {
            if(error.name == "RepositoryError" || error.name == "ValidationError" || error.name == "PasswordError" || error.name == "UserNotFound" || error.name == "ClientError" || error.name == "PasswordVerficationError" || error.name == "TokenHelperError") {
                throw error;
            }
            throw new ServiceError();
        }
    }

    verifyPassword(plainPassword, encryptedPassword) {
        try {
            return bcrypt.compareSync(plainPassword, encryptedPassword);
        } catch (error) {
            throw new AppError(
                "PasswordVerficationError",
                "Error Occured in verifying password.",
                "Error in User Service layer while password verification.",
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    
};

export default UserService;