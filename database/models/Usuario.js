module.exports = (sequelize, DataTypes) => {

    const u = sequelize.define(
        'Usuario',
        {
            nome: DataTypes.STRING,
            email: { type: DataTypes.STRING, allowNull: false },
            senha: DataTypes.STRING
        },
        {
            tableName: "usuarios",
            timestamps: false
        }
    );

    //QUANDO QUISERMOS TRAZER INFO DE OUTRA TABELA DE UM DADO, USAR u.associate

    // ela receberá models como parametro, que é um objeto literal dos models.

    u.associate = (models) => {
        //associando usuario com contatos para

        u.hasMany(models.Contato, { as: 'contatos', foreignKey: 'usuarios_id' }) // usuario tem muitos contatos - então usar um para muitos que é a hasMany

        // Recebe como parametro o model que será usado seguido de models.  
        // recebe um objeto , que terá as para nomear , e devemos passar a chave estrangeira que fará a ligação.

        u.belongsToMany  (models.Usuario,
        {
            as: 'colegas', 
            through: 'amizades' ,  // nome da tabela intermediária
            foreignKey: 'usuarios1_id', // id do model codado na tabela intermediaria
            otherKey: 'usuarios2_id', // id do model relacionado na tabela intermediaria
            timestamps: false  // afirmar que não vamos usar timestamps.
    }) // utilizar o trough quando precisamos trazer uma 
       //tabela intermédiaria criada entre duas tabelas de relacionamento muito para muitos.
    }

    // Usar belongsToMany para representar a relação de muito para muitos.
    return u;
}
