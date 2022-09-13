const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/myql");
const Form = require("./forms");

const User = sequelize.define(
  "usuarios",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
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
      type: ["user", "admin", "contador", "tesorero"],
      defaultValue: "user",
    },
  },
  {
    timestamps: true,
    version: false,
  }
);

// User.hasMany(Form);

// Role.associate = (models) => {
//   Role.hasMany(models.User, { as: 'users', foreignKey: 'user_id' })};

// return Role;
// }

module.exports = User;
