import dotenv from 'dotenv';
dotenv.config();

import bcrypt from 'bcrypt';

const PORT = process.env.PORT
const DB_URL = process.env.DB_URL
const SALT = bcrypt.genSaltSync(10);
const JWT_KEY = process.env.JWT_KEY;
const PASSPORT_KEY = process.env.PASSPORT_KEY;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

export {
    PORT,
    DB_URL,
    SALT,
    JWT_KEY,
    PASSPORT_KEY,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET
};