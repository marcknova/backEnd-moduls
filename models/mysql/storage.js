const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/myql");

const Storage = sequelize.define(
  "Storage",
  {
    url: {
      type: String,
    },
    filename: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = Storage;
