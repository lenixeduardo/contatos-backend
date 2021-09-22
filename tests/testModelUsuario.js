const { Usuario, sequelize } = require('../database/models');


Usuario.findByPk(1, {include: 'contatos'}).then(

// trazer o objeto com include, trazendo a associação que criamos. Que no caso foi a contatos
    u => {
        console.log(u.toJSON());
        sequelize.close();
    }
);


// Usuario.findAll().then(
//     usuarios => console.log(usuarios.map(u => u.toJSON()))
// )

// Usuario.create({nome: "Iago", email: "iago@dh.com" , senha:"segredo"});