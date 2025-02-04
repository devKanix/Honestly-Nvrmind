import Jwt from 'passport-jwt';
import { PASSPORT_KEY } from './serverConfig.js';
import { User } from '../models/index.js';
import { AppError } from '../utils/errors/index.js';
import { StatusCodes } from 'http-status-codes';

const JwtStrategy = Jwt.Strategy;
const ExtractJwt = Jwt.ExtractJwt;

const option = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PASSPORT_KEY
}

//This is token validation code. For Jwt type strategy implementation.
export const passportAuth = (passport) => {
    try {
        passport.use(new JwtStrategy(option, async(Jwt_payload, done) => { 
            const user = await User.findById(Jwt_payload.id);
            if(!user) {
                done(null, false);
            } else {
                done(null, user);
            }
        }));
    } catch (error) {
        console.log("Error faced within the passport auth jwt-middleware.",error);
        new AppError(
            "jwt-MiddlewarePassortAuthError",
            "Passport Authentication Error",
            "Unable to implement a Jwt strategy to make a succefull login for user",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}