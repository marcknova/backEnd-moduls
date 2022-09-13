const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

/**
 * *validamos cada uno de los valores que vamos a mandar a nuestras rutas
 */

const validatosCreteItems = [
  check("cantidad").exists().notEmpty(),
  check("unidad").exists().notEmpty,
  check("descripcion").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validatorGetItem = [
  check("id").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatosCreteItems, validatorGetItem };
