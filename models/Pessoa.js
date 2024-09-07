const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Pessoa = sequelize.define('Pessoa',
        {
          id: {type: DataTypes.INTEGER, primaryKey: true},
          nome: DataTypes.STRING,
          cpf: DataTypes.STRING,
          telefone: DataTypes.STRING,
        },
        { tableName: 'pessoas'}
        
    )
    return Pessoa
}
