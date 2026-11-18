import express from 'express';
import { cadastrarMaquina, listarMaquinas, buscarMaquinaPorId, atualizarMaquina, deletarMaquina, buscarMaquinaPorId } from '../controller/maquinaController';


const router = express.Router();

router.post('/', cadastrarEmbalagem);
router.get('/', listarEmbalagem);
router.get('/:id', buscarEmbalagemPorId);
router.patch('/:id', atualizarEmbalagem);
router.delete('/:id', deletarMaquina);
router.get('/nome/:nome', buscarMaquinaPorNome);

export default router;
