import express from 'express';
const router = express.Router();

import v1ApiRoutes from './v1/index.js';

router.use('/v1', v1ApiRoutes);

export default router;