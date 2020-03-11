import express from 'express';
import statsController from '../controllers/statsController';

const router = express.Router();

router.get('/stats', statsController.getStats);

export default router;
