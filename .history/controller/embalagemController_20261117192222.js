import { Embalagem } from '../model/embalagem.js';
import { atualizar, buscarPorId, cadastrar, deletar, listar, buscarPorNome } from '../repository/embalagemRepository.js';

export async function cadastrarEmbalagem(req, res) {

    try {
        const { descricao, material, email } = req.body;
        if (!descricao || !material || !email) {
            return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios!' });
        }
        const embalagem = new Embalagem(descricao, material, email);

        const id = await cadastrar(embalagem);

        res.status(201).json({ mensagem: 'Embalagem cadastrado com sucesso!', id_embalagem: id });
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao cadastrar embalagem!' + erro });
    }
}

export async function listarInstrutores(req, res) {
    try {
        const listaDeInstrutores = await listar();
        res.status(200).json(listaDeInstrutores);
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao listar instrutores!' + erro });
    }
}

export async function buscarInstrutorPorId(req, res) {
    try {
        const id = Number(req.params.id);

        const instrutor = await buscarPorId(id);

        if (!instrutor) {
            return res.status(404).json({ mensagem: 'Instrutor não encontrado!' });
        }
        res.status(200).json(instrutor);
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao buscar instrutor!' + erro });
    }
}

export async function atualizarInstrutor(req, res) {
    try {
        const id = Number(req.params.id);

        const embalagem = await buscarPorId(id);

        if (!embalagem) {
            return res.status(404).json({ mensagem: 'Instrutor não encontrado!' });
        }

        const { descricao, material, email } = req.body;

        if (descricao !== undefined) {
            embalagem.descricao = descricao;
        }
        if (material !== undefined) {
            embalagem.material = material;
        }
        if (email !== undefined) {
            embalagem.email = email;
        }

        const resultado = await atualizar(id, instrutor);

        if (resultado === 0) {
            return res.status(500).json({ mensagem: 'Nenhum embalagem atualizado!' });
        }

        res.status(200).json({ mensagem: 'Embalagem atualizado com sucesso!' });

    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao atualizar embalagem!' + erro });
    }
}

export async function deletarEmbalagem(req, res) {
    try {
        const id = Number(req.params.id);

        const embalagem = await buscarPorId(id);


        if (!embalagem) {
            return res.status(404).json({ mensagem: 'embalagem não encontrado!' });
        }

        const resultado = await deletar(id);

        if (resultado === 0) {
            return res.status(500).json({ mensagem: 'Nenhum embalagem deletado!' });
        }

        res.status(200).json({ mensagem: 'embalagem deletado com sucesso!' });
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao deletar embalagem!' + erro });
    }
}

export async function buscarEmbalagemPorNome(req, res) {
    try {
        const descricao = req.params.descricao;
        const embalagens = await buscarPorNome(descricao);
        res.status(200).json(embalagens);
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao buscar embalagem por descricao!' + erro });
    }
}