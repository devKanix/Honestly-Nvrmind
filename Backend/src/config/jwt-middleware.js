import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GitHubStrategy } from 'passport-github2';
import { PASSPORT_KEY, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from './serverConfig.js';
import { User } from '../models/index.js';
import { AppError } from '../utils/errors/index.js';
import { StatusCodes } from 'http-status-codes';

const jwtAuthOption = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PASSPORT_KEY
};

const passportAuth = () => {
    try {
        // JWT Strategy
        passport.use(new JwtStrategy(jwtAuthOption, async (jwtPayload, done) => {
            try {
                const user = await User.findById(jwtPayload.id);
                if (!user) {
                    return done(null, false);
                }
                return done(null, user);
            } catch (error) {
                return done(error, false);
            }
        }));

        // Google OAuth Strategy
        passport.use(new GoogleStrategy({
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback"
        }, async (accessToken, refreshToken, profile, done) => {
            try {
                let user = await User.findOne({ googleId: profile.id });
                if (!user) {
                    user = await User.create({ googleId: profile.id, email: profile.emails[0].value });
                }
                return done(null, user);
            } catch (error) {
                return done(error, false);
            }
        }));

        // GitHub OAuth Strategy
        passport.use(new GitHubStrategy({
            clientID: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
            callbackURL: "/auth/github/callback"
        }, async (accessToken, refreshToken, profile, done) => {
            try {
                let user = await User.findOne({ githubId: profile.id });
                if (!user) {
                    user = await User.create({ githubId: profile.id, email: profile.emails[0].value });
                }
                return done(null, user);
            } catch (error) {
                return done(error, false);
            }
        }));

        // Serialize User
        passport.serializeUser((user, done) => {
            done(null, user.id);
        });

        passport.deserializeUser(async (id, done) => {
            try {
                const user = await User.findById(id);
                done(null, user);
            } catch (error) {
                done(error, null);
            }
        });

    } catch (error) {
        console.error("Passport Authentication Error:", error);
        throw new AppError(
            "PassportAuthError",
            "Authentication Initialization Failed",
            "Could not initialize authentication strategies",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
};

export default passportAuth;
