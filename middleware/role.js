/**
 * Array con los roles permitidos
 * @param {*} rol
 * @returns
 */

const { handleErrorHttp } = require("../utils/handleError");

const checkRol = (roles) => (req, res, next) => {
  try {
    const { user } = req;
    const rolesByUser = user.role; //TODO { 'user' }

    const checkValueRol = roles.some((rolSingle) =>
      rolesByUser.includes(rolSingle)
    ); //TODO true, false
    if (!checkValueRol) {
      handleErrorHttp(res, "USER_NOT_PERMISSIONS", 403);
      return;
    }
    next();
  } catch (e) {
    handleErrorHttp(res, "ERROR_PERMISSIONS", 403);
  }
};

module.exports = checkRol;
