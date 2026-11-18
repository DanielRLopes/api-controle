import express from 'express';
import { cadastrarOperador, listarOperadores, buscarOperadorPorId, atualizarOperador, deletarOperador } from '../controller/operadorController.js';


const router = express.Router();

router.post('/', cadastrarOperador);
router.get('/', listarOperadores);
router.get('/:id', buscarOperadorPorId);
router.patch('/:id', atualizarOperador);
router.delete('/:id', deletarOperador);

export default router;
