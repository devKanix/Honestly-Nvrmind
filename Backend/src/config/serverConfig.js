import dotenv from 'dotenv';
dotenv.config();

import bcrypt from 'bcrypt';

const PORT = process.env.PORT
const DB_URL = process.env.DB_URL
const SALT = bcrypt.genSaltSync(10);
const JWT_KEY = process.env.JWT_KEY;
const PASSPORT_KEY = process.env.PASSPORT_KEY;

export {
    PORT,
    DB_URL,
    SALT,
    JWT_KEY,
    PASSPORT_KEY,
};