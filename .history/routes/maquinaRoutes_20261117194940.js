import express from 'express';
import { cadastrarMaquina, listarMaquinas, buscarMaquinaPorId, atualizarMaquina, deletarMaquina } from '../controller/maquinaController.js';


const router = express.Router();

router.post('/', cadastrarMaquina);
router.get('/', listarMaquinas);
router.get('/:id', buscarMaquinaPorId);
router.patch('/:id', atualizarMaquina);
router.delete('/:id', deletarMaquina);

export default router;
