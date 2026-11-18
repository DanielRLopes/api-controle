import express from 'express';
import { cadastrarEmbalagem, listarEmbalagem, buscarEmbalagemPorId, atualizarEmbalagem, deletarEmbalagem, buscarEmbalagemPorNome } from '../controller/embalagemController';


const router = express.Router();

router.post('/', cadastrarEmbalagem);
router.get('/', listarEmbalagem);
router.get('/:id', buscarEmbalagemPorId);
router.patch('/:id', atualizarEmbalagem);
router.delete('/:id', deletarInstrutor);
router.get('/nome/:nome', buscarEmbalagemPorNome);

export default router;
