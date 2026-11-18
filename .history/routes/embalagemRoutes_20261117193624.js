import express from 'express';
import { atualizar, buscarPorId, cadastrar, deletar, listar, buscarPorNome, cadastrarEmbalagem } from '../controller/embalagemController';


const router = express.Router();

router.post('/', cadastrarEmbalagem(req, res));
router.get('/', listarInstrutores);
router.get('/:id', buscarInstrutorPorId);
router.patch('/:id', atualizarInstrutor);
router.delete('/:id', deletarInstrutor);
router.get('/nome/:nome', buscarInstrutorPorNome);

export default router;
