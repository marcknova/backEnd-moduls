const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/myql");
const User = require("./users");

const Form = sequelize.define(
  "requisiciones",
  {
    id_req: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
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
    user_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: "usuarios",
        key: "user_id",
      },
    },
  },
  {
    timestamps: false,
  }
);

/**
 * Implementando modelo personalizado
 */

// Form.belongsTo(User, {
//   foreignKey: "user_id",
//   constraints: false,
//   as: "user",
// });

module.exports = Form;
