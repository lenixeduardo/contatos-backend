const { Contato } = require('../database/models');

// Usuario.findByPk(1).then(
//     u => console.log(u.toJSON())
// )

// Usuario.findAll().then(
//     usuarios => console.log(usuarios.map(u => u.toJSON()))
// )

Contato.create({nome: "Iago", email: "iago@dh.com" , usuarios_id: 1});