const { verifyToken } = require("../utils/handleJwt");
const { handleErrorHttp } = require("../utils/handleError");
const { usersModel } = require("../models");

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      handleErrorHttp(res, "NO_TOKEN", 401);
      return;
    }

    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await verifyToken(token);

    if (!dataToken.id) {
      handleErrorHttp(res, "ERROR_ID_TOKEN", 401);
      return;
    }

    const user = await usersModel.findByPk(dataToken.id);
    req.user = user;

    next();
  } catch (e) {
    handleErrorHttp(res, "NO_SESSION", 401);
  }
};

module.exports = authMiddleware;
