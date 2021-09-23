const { Contato,sequelize } = require('../database/models');

// findByPk() é usado para trazer o ID que desejamos.

Contato.findByPk(3, {include:['telefones','usuario']}).then(
    c => {
        console.log(c.toJSON());
        sequelize.close();
    }
)