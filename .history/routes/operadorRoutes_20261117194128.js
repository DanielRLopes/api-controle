import express from 'express';
import { cadastrarOperador, listarOperadores, buscarOperadorPorId, atualizarOperador, deletarOperador, buscarOperadorPorId } from '../controller/operadorController';


const router = express.Router();

router.post('/', cadastrarMaquina);
router.get('/', listarMaquinas);
router.get('/:id', buscarOperadorPorId);
router.patch('/:id', atualizarOperador);
router.delete('/:id', deletarOperador);
router.get('/nome/:nome', buscarOperadorPorNome);

export default router;
