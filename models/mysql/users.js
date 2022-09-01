const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/myql");

const User = sequelize.define(
  "usuarios",
  {
    usuario: {
      type: DataTypes.STRING,
    },
    correo: {
      type: DataTypes.STRING,
      unique: true,
    },
    contraseña: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: ["user", "admin"],
      defaultValue: "user",
    },
  },
  {
    timestamps: true,
    version: false,
  }
);

module.exports = User;
