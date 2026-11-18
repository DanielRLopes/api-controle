import { Maquina } from '../model/maquina.js';
import { atualizar, buscarPorId, cadastrar, deletar, listar } from '../repository/maquinaRepository.js';

export async function cadastrarMaquina(req, res) {

    try {
        const { nome, patrimonio, localizacao } = req.body;
        if (!nome || !patrimonio || !localizacao) {
            return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios!' });
        }
        const maquina = new Maquina(nome, patrimonio, localizacao);

        const id = await cadastrar(maquina);

        res.status(201).json({ mensagem: 'Maquina cadastrada com sucesso!', id_maquina: id });
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao cadastrar maquina!' + erro });
    }
}

export async function listarMaquinas(req, res) {
    try {
        const listaDeMaquinas = await listar();
        res.status(200).json(listaDeMaquinas);
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao listar maquinas!' + erro });
    }
}

export async function buscarSalaPorId(req, res) {
    try {
        const id = Number(req.params.id);

        const sala = await buscarPorId(id);

        if (!sala) {
            return res.status(404).json({ mensagem: 'Sala não encontrada!' });
        }
        res.status(200).json(sala);
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao buscar sala!' + erro });
    }
}

export async function atualizarSala(req, res) {
    try {
        const id = Number(req.params.id);

        const sala = await buscarPorId(id);

        if (!sala) {
            return res.status(404).json({ mensagem: 'Sala não encontrada!' });
        }

        const { nome, patrimonio, localizacao } = req.body;

        if (nome !== undefined) {
            sala.nome = nome;
        }
        if (patrimonio !== undefined) {
            sala.patrimonio = patrimonio;
        }
        if (localizacao !== undefined) {
            sala.localizacao = localizacao;
        }

        const resultado = await atualizar(id, sala);

        if (resultado === 0) {
            return res.status(500).json({ mensagem: 'Nenhuma sala atualizada!' });
        }

        res.status(200).json({ mensagem: 'Sala atualizada com sucesso!' });

    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao atualizar sala!' + erro });
    }
}

export async function deletarSala(req, res) {
    try {
        const id = Number(req.params.id);

        const sala = await buscarPorId(id);


        if (!sala) {
            return res.status(404).json({ mensagem: 'Sala não encontrada!' });
        }

        const resultado = await deletar(id);

        if (resultado === 0) {
            return res.status(500).json({ mensagem: 'Nenhuma sala deletada!' });
        }

        res.status(200).json({ mensagem: 'Sala deletada com sucesso!' });
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao deletar sala!' + erro });
    }
}