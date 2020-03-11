import express from 'express';
import mutationsRouter from './mutationsRouter';
import statsRouter from './statsRouter';

const router = express.Router();
router.use(mutationsRouter).use(statsRouter);

export default router;
