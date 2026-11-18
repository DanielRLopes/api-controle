import express from 'express';
import { cadastrarMaquina, listarMaquinas, buscarMaquinaPorId, atualizarMaquina, deletarMaquina, buscarMaquinaPorId } from '../controller/maquinaController';


const router = express.Router();

router.post('/', cadastrarMaquina);
router.get('/', listarMaquina);
router.get('/:id', buscarMaquinaPorId);
router.patch('/:id', atualizarMaquina);
router.delete('/:id', deletarMaquina);
router.get('/nome/:nome', buscarMaquinaPorNome);

export default router;
