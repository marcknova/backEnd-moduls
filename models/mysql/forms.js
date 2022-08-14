const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/myql");

const Form = sequelize.define(
  "forms",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
    },
    celular: {
      type: DataTypes.STRING,
    },
    extension: {
      type: DataTypes.STRING,
    },
    correo: {
      type: DataTypes.STRING,
    },
    departamento: {
      type: DataTypes.STRING,
    },
    puesto: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Form;
