const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRETE;

/**
 * Debes de pasar el objeto del usuario
 * @param {*} user
 */
const tokenSign = async (user) => {
  const signs = jwt.sign(
    {
      id: user.user_id,
      role: user.role,
    },
    JWT_SECRET,
    {
      expiresIn: "5h",
    }
  );
  return signs;
};

/**
 * Debes de pasar el token de sesion JWT
 * @returns
 */
const verifyToken = async (tokenJwt) => {
  try {
    return jwt.verify(tokenJwt, JWT_SECRET);
  } catch (e) {
    return null;
  }
};

module.exports = { tokenSign, verifyToken };
