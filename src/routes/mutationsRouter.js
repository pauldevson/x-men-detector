import express from 'express';
import mutationsController from '../controllers/mutationsController';

const router = express.Router();

router.post('/mutations', mutationsController.addMutation);

export default router;
