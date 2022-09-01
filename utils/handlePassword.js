const bcryptjs = require("bcryptjs");

/**
 * Contraseña sin encriptar: hola123456
 */
const encrypt = async (passwordPlan) => {
  const hash = await bcryptjs.hash(passwordPlan, 10);
  return hash;
};

/**
 * Pasar contraseña sin encriptar y pasar contraseña encriptada
 */
const compare = async (passwordPlan, hashPassword) => {
  return await bcryptjs.compare(passwordPlan, hashPassword);
};

module.exports = { encrypt, compare };
