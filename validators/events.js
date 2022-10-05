const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

/**
 * * Validamos cada uno de los valores que vamos a mandar a nuestras rutas
 */

const validatorCreateEvent = [
  check("title").exists().notEmpty(),
  check("description").exists().notEmpty(),
  check("allDay").exists().notEmpty(),
  check("start").exists().notEmpty(),
  check("end").exists().notEmpty(),
  check("color").exists().notEmpty(),
  // check("location").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validatorGetEvent = [
  check("id").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorCreateEvent, validatorGetEvent };
