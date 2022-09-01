const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

/**
 * *validamos cada uno de los valores que vamos a mandar a nuestras rutas
 */

const validatorRegister = [
  check("usuario").exists().notEmpty().isLength({ min: 4, max: 50 }),
  check("correo").exists().notEmpty().isEmail(),
  check("contraseña").exists().notEmpty().isLength({ min: 5, max: 15 }),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];
const validatorLogin = [
  check("correo").exists().notEmpty().isEmail(),
  check("contraseña").exists().notEmpty().isLength({ min: 5, max: 15 }),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorRegister, validatorLogin };
