import express from 'express';
import { getTutor, createTutor, updateTutor, deleteTutor } from "../controller/tutor_controller.js"

const router = express.Router();

router.get('/tutor', getTutor);
router.post('/tutor', createTutor);
router.put('/tutor/:cpf', updateTutor);
router.delete('/tutor/:cpf', deleteTutor);

export default router;