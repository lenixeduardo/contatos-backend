module.exports = (sequelize, DataTypes) => {

    const u = sequelize.define(
        'Telefone',
        {
            numero: DataTypes.STRING,
            contatos_id: { type: DataTypes.INTEGER, allowNull: false },
        },
        {
            tableName: "telefones",
            timestamps: false
        }
    );
    return u;
}
