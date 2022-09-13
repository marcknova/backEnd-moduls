const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/myql");

const Form = require("./forms");

const Product = sequelize.define(
  "productos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
    },
    unidad: {
      type: DataTypes.STRING,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
    id_product: {
      type: DataTypes.INTEGER,
    },
    id_req: {
      type: DataTypes.INTEGER,
      references: {
        model: "requisiciones",
        key: "id_req",
      },
    },
    estado: {
      type: DataTypes.STRING,
      defaultValue: "pendiente",
    },
  },
  {
    timestamps: false,
  }
);

// Product.associate = () => {
//   Product.belongsTo(Form, { foreignKey: "id" });
// };

// return Role;

module.exports = Product;
