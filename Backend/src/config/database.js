import mongoose from 'mongoose';

import { DB_URL } from './serverConfig.js';

export const dbconnect = async () => {
    await mongoose.connect(DB_URL)
    console.log("MongoDB connected Successfully.");
}