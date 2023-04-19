const Sequelize = require("sequelize");
const DB_NAME = "produtos_db";
const DB_USER = "root";
const DB_PASS = "mysql";
const DB_CONFIG = {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  define: {
    timestamps: false,
  },
};

// objeto para guardar a conexão do banco dados
let db = {};

try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  console.error("banco nao conectado");
}

async function hasConection() {
  try {
    await db.authenticate();
    console.log("banco conectado");
  } catch (error) {
    console.error("banco nao conectado");
  }
}

Object.assign(db, {
  hasConection,
});

module.exports = db;
