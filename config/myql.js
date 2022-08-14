require("dotenv").config();
const { Sequelize } = require("sequelize");

const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USERNAME;
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize(database, username, null, {
  host,
  dialect: "mysql",
});

const dbConnectMysql = async () => {
  try {
    await sequelize.authenticate();
    console.log("MYSQL Conexion Correcta");
  } catch (e) {
    console.log("MYSQL Error de Conexion", e);
  }
};

module.exports = { sequelize, dbConnectMysql };
