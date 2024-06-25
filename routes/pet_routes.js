import express from 'express';
import { getPet, createPet, updatePet, deletePet } from "../controller/pet_controller.js";

const router = express.Router();

router.get('/pet', getPet);
router.post('/pet', createPet);
router.put('/pet/:codigo_pet', updatePet);
router.delete('/pet/:codigo_pet', deletePet);

export default router;