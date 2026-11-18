import conexao from '../database/conexao.js';

export async function cadastrar(maquina) {
    const sql = 'INSERT INTO maquina (nome, capacidade, localizacao) VALUES (?, ?, ?)';
    const [resultado] = await conexao.execute(sql, [maquina.nome, maquina.capacidade, maquina.localizacao]);
    return resultado.insertId;
}

export async function listar() {
    const sql = 'SELECT * FROM maquina';
    const [resultado] = await conexao.execute(sql);
    return resultado;
}

export async function buscarPorId(id) {
    const sql = 'SELECT * FROM maquina WHERE id_maquina = ?';
    const [resultado] = await conexao.execute(sql, [id]);
    return resultado[0];
}

export async function atualizar(id, maquina) {
    const sql = 'UPDATE maquina SET nome = ?, capacidade = ?, localizacao = ? WHERE id_maquina = ?';
    const [resultado] = await conexao.execute(sql, [maquina.nome, maquina.capacidade, maquina.localizacao, id]);
    return resultado.affectedRows;
}

export async function deletar(id) {
    const sql = 'DELETE FROM maquina WHERE id_maquina = ?';
    const [resultado] = await conexao.execute(sql, [id]);
    return resultado.affectedRows;
}

