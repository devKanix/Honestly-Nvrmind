import express from 'express';
import passport from 'passport';
import cors from 'cors';

import {PORT} from './config/serverConfig.js';
import {dbConnect} from './config/database.js';
import apiRoutes from './routes/index.js';
import { passportAuth } from './config/jwt-middleware.js';

const startAndStopServer = async () => {
    const app = express();

    //Adding middlewares
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    //passport authentication initilaztion
    app.use(passport.initialize());
    passportAuth(passport);

    // Allow requests from the frontend origin (http://localhost:3000)
    app.use(cors({
        origin: 'http://localhost:3000', // or '*' to allow any origin
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }));

    //Routes
    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server Started at PORT:${PORT}`);
        await dbConnect();
    });
}

startAndStopServer();