import express from 'express';
import passport from 'passport'; 
import AuthController from '../../controllers/auth-controller.js';
import passportAuth from '../../config/jwt-middleware.js'; 

const router = express.Router();

// Initialize Passport authentication strategies
passportAuth(passport); // Ensure this is called before using passport.authenticate()

router.post('/signup', AuthController.signUp);
router.post('/signin', AuthController.signIn);

// Google OAuth Routes
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/dashboard');
    }
);

// GitHub OAuth Routes
router.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));
router.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/dashboard');
    }
);

export default router;
