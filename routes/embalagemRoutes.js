import express from 'express';
import { cadastrarEmbalagem, listarEmbalagem, buscarEmbalagemPorId, atualizarEmbalagem, deletarEmbalagem } from '../controller/embalagemController.js';


const router = express.Router();

router.post('/', cadastrarEmbalagem);
router.get('/', listarEmbalagem);
router.get('/:id', buscarEmbalagemPorId);
router.patch('/:id', atualizarEmbalagem);
router.delete('/:id', deletarEmbalagem);

export default router;
