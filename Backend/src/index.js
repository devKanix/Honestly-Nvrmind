import express from 'express';
import passport from 'passport';
import session from 'express-session';

import {PORT} from './config/serverConfig.js';
import { dbconnect } from './config/database.js';
import apiRoutes from './routes/index.js';
import passportAuth from './config/jwt-middleware.js';

const startAndStopServer = async () => {
    const app = express();

    //Adding middlewares
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Middleware for session handling
    app.use(session({
        secret: 'your_secret_key',
        resave: false,
        saveUninitialized: false
    }));
    
    app.use(passport.initialize());
    app.use(passport.session());

    //passport authentication initilaztion
    app.use(passport.initialize());
    passportAuth(passport);

    //Routes
    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server Started at PORT:${PORT}`);
        await dbconnect();
    });
}

startAndStopServer();