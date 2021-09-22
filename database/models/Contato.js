module.exports = (sequelize,DataTypes) => {

    const u = sequelize.define(  
        'Contato',{

           nome: DataTypes.STRING,
           email: DataTypes.STRING,
           usuarios_id: DataTypes.INTEGER
        },
        {
            tableName: 'contatos',
            timestamps: false
        }
    );
        return u;
}
