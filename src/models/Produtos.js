const db = require("../database");
const { DataTypes } = require("sequelize");

const Produtos = db.define(
  "Produtos",
  {
    codigo_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descricao: {
      type: DataTypes.STRING,
    },
    preco: {
      type: DataTypes.FLOAT,
    },
    data_cadastro: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "produtos",
    timestamps: false,
  }
);

module.exports = Produtos;
