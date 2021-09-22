const AuthController = {
    registrar: (req, res)=>{
        const { Usuario } = require('../database/models');

        Usuario.findByPk(1).then(
            u => {return res.send(u.toJSON())}
        )
        
        // Usuario.findAll().then(
        //     usuarios => console.log(usuarios.map(u => u.toJSON()))
        // )
        
        // Usuario.create({nome: "Iago", email: "iago@dh.com" , senha:"segredo"});
    },
    login: (req, res) => {
        console.log('logando...');
       return res.send('logando...');
    }
}

AuthController.registrar({

    
})


module.exports = AuthController;