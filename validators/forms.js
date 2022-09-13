const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

/**
 * *validamos cada uno de los valores que vamos a mandar a nuestras rutas
 */

const validatorCreateItem = [
  check("nombre").exists().notEmpty(),
  check("apellido").exists().notEmpty(),
  check("celular").exists().notEmpty(),
  check("extension").exists().notEmpty(),
  check("correo").exists().notEmpty(),
  check("departamento").exists().notEmpty(),
  check("puesto").exists().notEmpty(),
  check("user_id").exists().notEmpty(),
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

module.exports = { validatorCreateItem, validatorGetItem };
