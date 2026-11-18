import express from 'express';
import { cadastrarMaquina, listarMaquinas, buscarMaquinaPorId, atualizarMaquina, deletarMaquina, buscarEmbalagemPorId } from '../controller/maquinaController';


const router = express.Router();

router.post('/', cadastrarEmbalagem);
router.get('/', listarEmbalagem);
router.get('/:id', buscarEmbalagemPorId);
router.patch('/:id', atualizarEmbalagem);
router.delete('/:id', deletarEmbalagem);
router.get('/nome/:nome', buscarEmbalagemPorNome);

export default router;
