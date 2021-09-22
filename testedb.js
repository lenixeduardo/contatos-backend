const { Sequelize, QueryTypes }  = require('sequelize');

// importar as minhas configurações


const config = require('./database/config/config.json').development;


// Criando a minha conexão com o banco de dados.

const conexao = new Sequelize(config);


// executando uma consulta de testes

conexao.query("select * from usuarios", { type : QueryTypes.SELECT}).then(
    dados => console.log(dados)
)

process.exit();
