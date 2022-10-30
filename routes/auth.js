const express = require("express");
const { registerCtrl, loginCtrl, changeEmail } = require("../controllers/auth");
const { validatorRegister, validatorLogin } = require("../validators/users");
const router = express.Router();

/**
 * Crear registro
 */
router.post("/register", validatorRegister, registerCtrl);

router.post("/login", validatorLogin, loginCtrl);

router.put("/change", changeEmail);

module.exports = router;
