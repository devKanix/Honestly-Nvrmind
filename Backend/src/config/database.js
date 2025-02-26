import mongoose from 'mongoose';

import {DB_URL} from './serverConfig.js';

export const dbConnect = async () => {
    await mongoose.connect(DB_URL);
    console.log("MongoDB Connected Successfully.");
};