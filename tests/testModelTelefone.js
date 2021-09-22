const { Telefone, sequelize } = require('../database/models');

// Usuario.findByPk(1).then(
//     u => console.log(u.toJSON())
// )

// Usuario.findAll().then(
//     usuarios => console.log(usuarios.map(u => u.toJSON()))
// )

Telefone.create({numero: "40028922", contatos_id: 1 }).then(
    tel => {console.log(tel.toJSON());
    sequelize.close()
}
);