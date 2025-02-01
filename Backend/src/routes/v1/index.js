import express from 'express';
const router = express.Router();


import AuthController from '../../controllers/auth-controller.js';

router.post('/users/signup', AuthController.signUp);
router.post('/users/signin', AuthController.signIn);

export default router;