const { pool } = require("./servico/conexao.js");


async function executaQuery(conexao, query) {
    const resultado_query = await conexao.query(query);

    const resposta = resultado_query[0];

    return resposta;
}

async function retornaCampeonatos() {
    const conexao = await pool.getConnection();
    const query = 'SELECT * FROM campeonatos';

    const campeonatos = executaQuery(conexao, query);

    conexao.release();
    return campeonatos;
}

async function retornaCampeonatosId(id) {
    const conexao = await pool.getConnection();
    const query = 'SELECT id, campeao, vice, ano FROM  campeonatos WHERE id = '+id;

    const campeonatos = executaQuery(conexao, query);

    conexao.release();

    return campeonatos;
}

async function retornaCampeonatosAno(ano) {
    const conexao = await pool.getConnection();
    const query = 'SELECT * FROM campeonatos WHERE ano = '+ano;

    const campeonatos = executaQuery(conexao, query);

    conexao.release();

    return campeonatos;
}

async function retornaCampeonatosTime(time) {
    const conexao = await pool.getConnection();
    const query = 'SELECT id, campeao, vice, ano FROM campeonatos WHERE campeao = "'+time+'"';

    const campeonatos = executaQuery(conexao, query);

    conexao.release();

    return campeonatos;
}

module.exports = { retornaCampeonatos, retornaCampeonatosId, retornaCampeonatosAno, retornaCampeonatosTime };