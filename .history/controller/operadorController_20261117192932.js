import { Operador } from '../model/operador.js';
import { atualizar, buscarPorId, cadastrar, deletar, listar } from '../repository/operadorRepository.js';

export async function cadastrarOperador(req, res) {

    try {
        const { nome, carga_horaria, modalidade } = req.body;
        if (!nome || !carga_horaria || !modalidade) {
            return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios!' });
        }
        const operador = new Operador(nome, carga_horaria, modalidade);

        const id = await cadastrar(operador);

        res.status(201).json({ mensagem: 'Operador cadastrado com sucesso!', id_operador: id });
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao cadastrar operador!' + erro });
    }
}

export async function listarOperadores(req, res) {
    try {
        const listaDeOperadores = await listar();
        res.status(200).json(listaDeOperadores);
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao listar operadores!' + erro });
    }
}

export async function buscarTreinamentoPorId(req, res) {
    try {
        const id = Number(req.params.id);

        const treinamento = await buscarPorId(id);

        if (!treinamento) {
            return res.status(404).json({ mensagem: 'Treinamento não encontrado!' });
        }
        res.status(200).json(treinamento);
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao buscar treinamento!' + erro });
    }
}

export async function atualizarTreinamento(req, res) {
    try {
        const id = Number(req.params.id);

        const treinamento = await buscarPorId(id);

        if (!treinamento) {
            return res.status(404).json({ mensagem: 'Treinamento não encontrado!' });
        }

        const { nome, carga_horaria, modalidade } = req.body;

        if (nome !== undefined) {
            treinamento.nome = nome;
        }
        if (carga_horaria !== undefined) {
            treinamento.carga_horaria = carga_horaria;
        }
        if (modalidade !== undefined) {
            treinamento.modalidade = modalidade;
        }

        const resultado = await atualizar(id, treinamento);

        if (resultado === 0) {
            return res.status(500).json({ mensagem: 'Nenhum treinamento atualizado!' });
        }

        res.status(200).json({ mensagem: 'Treinamento atualizado com sucesso!' });

    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao atualizar treinamento!' + erro });
    }
}

export async function deletarTreinamento(req, res) {
    try {
        const id = Number(req.params.id);

        const treinamento = await buscarPorId(id);

        if (!treinamento) {
            return res.status(404).json({ mensagem: 'Treinamento não encontrado!' });
        }

        const resultado = await deletar(id);

        if (resultado === 0) {
            return res.status(500).json({ mensagem: 'Nenhum treinamento deletado!' });
        }

        res.status(200).json({ mensagem: 'Treinamento deletado com sucesso!' });
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao deletar treinamento!' + erro });
    }
}