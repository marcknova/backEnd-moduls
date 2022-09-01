const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/myql");
const User = require("./users");

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

/**
 * Implementando modelo personalizado
 */

Form.findAll = function () {
  Form.belongsTo(User, {
    foreignKey: "id",
  });

  return Form.findAll({ include: User });
};

module.exports = Form;
