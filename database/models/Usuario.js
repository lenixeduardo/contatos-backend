module.exports = (sequelize,DataTypes) => {

    const u = sequelize.define(
        'Usuario',
        {
            nome: DataTypes.STRING,
            email: {type: DataTypes.STRING, allowNull:false},
            senha: DataTypes.STRING
        },
        {
            tableName:"usuarios",
            timestamps: false
        }
    );

    //QUANDO QUISERMOS TRAZER INFO DE OUTRA TABELA DE UM DADO, USAR u.associate

// ela receberá models como parametro, que é um objeto literal dos models.

    u.associate = (models) => {
        //associando usuario com contatos para

u.hasMany(models.Contato, {as: 'contatos', foreignKey: 'usuarios_id'}) // usuario tem muitos contatos - então usar um para muitos que é a hasMany

    // Recebe como parametro o model que será usado seguido de models.  
    // recebe um objeto , que terá as para nomear , e devemos passar a chave estrangeira que fará a ligação.

    }
        return u;
}
