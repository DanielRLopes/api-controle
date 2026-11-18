import conexao from '../database/conexao.js';

export async function cadastrar(embalagem) {
    const sql = 'INSERT INTO embalagem (nome, especialidade, email) VALUES (?, ?, ?)';
    const [resultado] = await conexao.execute(sql, [embalagem.nome, embalagem.especialidade, embalagem.email]);
    return resultado.insertId;
}

export async function listar() {
    const sql = 'SELECT * FROM embalagem';
    const [resultado] = await conexao.execute(sql);
    return resultado;
}

export async function buscarPorId(id) {
    const sql = 'SELECT * FROM embalagem WHERE id_embalagem = ?';
    const [resultado] = await conexao.execute(sql, [id]);
    return resultado[0];
}

export async function atualizar(id, embalagem) {
    const sql = 'UPDATE embalagem SET nome = ?, especialidade = ?, email = ? WHERE id_embalagem = ?';
    const [resultado] = await conexao.execute(sql, [embalagem.nome, embalagem.especialidade, embalagem.email, id]);
    return resultado.affectedRows;
}

export async function deletar(id) {
    const sql = 'DELETE FROM embalagem WHERE id_embalagem = ?';
    const [resultado] = await conexao.execute(sql, [id]);
    return resultado.affectedRows;
}

export async function buscarPorNome(nome) {
    const sql = 'SELECT * FROM embalagem WHERE nome LIKE ?';
    const [resultado] = await conexao.execute(sql, [`%${nome}%`]);
    return resultado;
}
