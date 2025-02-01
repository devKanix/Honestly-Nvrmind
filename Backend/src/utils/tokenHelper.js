import jwt from 'jsonwebtoken';
import { JWT_KEY } from '../config/serverConfig.js';
import { AppError, ValidationError } from './errors/index.js';
import { StatusCodes } from 'http-status-codes';

function createToken(payload) {
    try {
        const token = jwt.sign(payload, JWT_KEY, { expiresIn: '1h'});
        return token;
    } catch (error) {
        throw new AppError(
            "TokenHelperError",
            "Token Creation Error",
            "Error occured in token creation inside the Token helper.",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

function verifyToken(token) {
    try {
        return jwt.verify(token, JWT_KEY);
    } catch (error) {
        throw new ValidationError(error);
    }
}

export default {
    createToken,
    verifyToken
}