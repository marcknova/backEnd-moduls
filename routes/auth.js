const express = require("express");
const { registerCtrl, loginCtrl } = require("../controllers/auth");
const { validatorRegister, validatorLogin } = require("../validators/users");
const router = express.Router();

/**
 * Crear registro
 */
router.post("/register", validatorRegister, registerCtrl);

router.post("/login", validatorLogin, loginCtrl);

module.exports = router;
