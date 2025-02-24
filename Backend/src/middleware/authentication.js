import { StatusCodes } from 'http-status-codes';
import passport from 'passport';

// import Token from '../utils/tokenHelper.js';
// import { UserRepository } from '../repository/index.js';

export const isAuthenticated = (req, res, next) => {
    try {
        passport.authenticate('jwt', (err, user) => {
            if(err) next(err);
            if(!user) {
                return res.status(StatusCodes.UNAUTHORIZED).json({
                    success: false,
                    message: "Unauthorised access..",
                });
            }
            req.user = user;
            next();
        })(req, res, next);

        // const userRepository = new UserRepository();

        // const token = req.headers['x-access-token'];
        
        // const response = Token.verifyToken(token);
        // if(!response) {
        //     throw {error: 'Invalid token'};
        // }

        // const user = await userRepository.get(response.id);
        // if(!user) {
        //     throw {error: "No user with the corresponding token exists."};
        // }

        // req.body.user = user;
        // next();
    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            success: false,
            data: {},
            message: error.message,
            err: "Middleware isAuhtenticated faced an Issue"
        });
    }
}

export const isOAuthAuthenticated = (req, res, next) => {
    if (!req.user) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            success: false,
            message: "Unauthorized access..",
        });
    }
    next();
};