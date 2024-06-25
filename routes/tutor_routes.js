import express from 'express';
import { getTutor, createTutor, updateTutor, deleteTutor, getPetsByTutor } from "../controller/tutor_controller.js";

const router = express.Router();

router.get('/tutor', getTutor);
router.post('/tutor', createTutor);
router.put('/tutor/:cpf', updateTutor);
router.delete('/tutor/:cpf', deleteTutor);
// rota para obter os pets de um tutor específico
router.get('/tutor/:cpf/pets', getPetsByTutor);

export default router;