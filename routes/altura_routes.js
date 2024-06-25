import express from 'express';
import { getAltura, createAltura } from '../controller/altura_controller.js';

const router = express.Router();

router.get('/altura', getAltura);
router.post('/altura', createAltura);

export default router;