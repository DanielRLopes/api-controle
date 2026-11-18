import express from 'express';
import { atualizar, buscarPorId, cadastrar, deletar, listar, buscarPorNome, cadastrarEmbalagem } from '../controller/embalagemController';


const router = express.Router();

router.post('/', cadastrarEmbalagem);
router.get('/', listarEmbalagem);
router.get('/:id', buscarEmbalagemPorId);
router.patch('/:id', atualizarEmbalagem);
router.delete('/:id', deletarInstrutor);
router.get('/nome/:nome', buscarInstrutorPorNome);

export default router;
