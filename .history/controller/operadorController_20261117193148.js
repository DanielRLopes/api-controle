import { Operador } from '../model/operador.js';
import { atualizar, buscarPorId, cadastrar, deletar, listar } from '../repository/operadorRepository.js';

export async function cadastrarOperador(req, res) {

    try {
        const { nome, matricula, modalidade } = req.body;
        if (!nome || !matricula || !modalidade) {
            return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios!' });
        }
        const operador = new Operador(nome, matricula, modalidade);

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

export async function buscarOperadorPorId(req, res) {
    try {
        const id = Number(req.params.id);

        const operador = await buscarPorId(id);

        if (!operador) {
            return res.status(404).json({ mensagem: 'Operador não encontrado!' });
        }
        res.status(200).json(operador);
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao buscar operador!' + erro });
    }
}

export async function atualizarOperador(req, res) {
    try {
        const id = Number(req.params.id);

        const operador = await buscarPorId(id);

        if (!operador) {
            return res.status(404).json({ mensagem: 'Operador não encontrado!' });
        }

        const { nome, matricula, modalidade } = req.body;

        if (nome !== undefined) {
            operador.nome = nome;
        }
        if (matricula !== undefined) {
            operador.matricula = matricula;
        }
        if (modalidade !== undefined) {
            operador.modalidade = modalidade;
        }

        const resultado = await atualizar(id, operador);

        if (resultado === 0) {
            return res.status(500).json({ mensagem: 'Nenhum operador atualizado!' });
        }

        res.status(200).json({ mensagem: 'Operador atualizado com sucesso!' });

    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao atualizar operador!' + erro });
    }
}

export async function deletarOperador(req, res) {
    try {
        const id = Number(req.params.id);

        const operador = await buscarPorId(id);

        if (!operador) {
            return res.status(404).json({ mensagem: 'Operador não encontrado!' });
        }

        const resultado = await deletar(id);

        if (resultado === 0) {
            return res.status(500).json({ mensagem: 'Nenhum operador deletado!' });
        }

        res.status(200).json({ mensagem: 'Operador deletado com sucesso!' });
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao deletar operador!' + erro });
    }
}