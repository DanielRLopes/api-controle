import express from 'express';
import { cadastrarOperador, listarOperadores, buscarOperadorPorId, atualizarOperador, deletarOperador } from '../controller/operadorController';


const router = express.Router();

router.post('/', cadastrarOperador);
router.get('/', listarOperadores);
router.get('/:id', buscarOperadorPorId);
router.patch('/:id', atualizarOperador);
router.delete('/:id', deletarOperador);
router.get('/nome/:nome', buscarOperadorPorNome);

export default router;
