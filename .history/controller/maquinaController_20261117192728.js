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

export async function buscarMaquinaPorId(req, res) {
    try {
        const id = Number(req.params.id);

        const maquina = await buscarPorId(id);

        if (!maquina) {
            return res.status(404).json({ mensagem: 'Sala não encontrada!' });
        }
        res.status(200).json(maquina);
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao buscar maquina!' + erro });
    }
}

export async function atualizarMaquina(req, res) {
    try {
        const id = Number(req.params.id);

        const maquina = await buscarPorId(id);

        if (!maquina) {
            return res.status(404).json({ mensagem: 'maquina não encontrada!' });
        }

        const { nome, patrimonio, localizacao } = req.body;

        if (nome !== undefined) {
            maquina.nome = nome;
        }
        if (patrimonio !== undefined) {
            salmaquinaa.patrimonio = patrimonio;
        }
        if (localizacao !== undefined) {
            maquina.localizacao = localizacao;
        }

        const resultado = await atualizar(id, maquina);

        if (resultado === 0) {
            return res.status(500).json({ mensagem: 'Nenhuma maquina atualizada!' });
        }

        res.status(200).json({ mensagem: 'Maquina atualizada com sucesso!' });

    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao atualizar maquina!' + erro });
    }
}

export async function deletarMaquina(req, res) {
    try {
        const id = Number(req.params.id);

        const maquina = await buscarPorId(id);


        if (!maquina) {
            return res.status(404).json({ mensagem: 'Maquina não encontrada!' });
        }

        const resultado = await deletar(id);

        if (resultado === 0) {
            return res.status(500).json({ mensagem: 'Nenhuma maquina deletada!' });
        }

        res.status(200).json({ mensagem: 'Maquina deletada com sucesso!' });
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao deletar maquina!' + erro });
    }
}