import express from 'express';
import { atualizar, buscarPorId, cadastrar, deletar, listar, buscarPorNome } from '../controller/embalagemController';


const router = express.Router();

router.post('/', cadastrarInstrutor);
router.get('/', listarInstrutores);
router.get('/:id', buscarInstrutorPorId);
router.patch('/:id', atualizarInstrutor);
router.delete('/:id', deletarInstrutor);
router.get('/nome/:nome', buscarInstrutorPorNome);

export default router;
