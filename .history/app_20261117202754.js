import express from 'express';
import instrutorRoutes from './routes/embalagemRoutes.js';
import salaRoutes from './routes/maquinaRoutes.js';
import treinamentoRoutes from './routes/operadorRoutes.js';
import conexao from './database/conexao.js';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/embalagem', embalagemRoutes);
app.use('/maquina', maquinaRoutes);
app.use('/maquina', operadorRoutes);

async function iniciarServidor() {
    console.log(PORT);
    try {
        const conexaoTeste = await conexao.getConnection();

        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        });
    } catch (erro) {
        console.log('Erro ao conectar com o banco de dados:');
        console.log(erro.mensagem);
        process.exit(1);
    }
}

iniciarServidor();
