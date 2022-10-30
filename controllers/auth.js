const { matchedData, body } = require("express-validator");
const { usersModel } = require("../models");
const { handleErrorHttp } = require("../utils/handleError");
const { tokenSign } = require("../utils/handleJwt");
const { encrypt, compare } = require("../utils/handlePassword");

/**
 *  Este controlador es el encargado de registrar un usuario
 * @param {*} req
 * @param {*} res
 */
const registerCtrl = async (req, res) => {
  try {
    req = matchedData(req);
    const password = await encrypt(req.contraseña);
    const body = { ...req, contraseña: password };
    const dataUser = await usersModel.create(body);
    dataUser.set("contraseña", undefined, { strict: false });

    const data = {
      token: await tokenSign(dataUser),
      user: dataUser,
    };
    res.send({ data });
  } catch (e) {
    handleErrorHttp(res, "ERROR_REGISTER_USER");
    return;
  }
};

const loginCtrl = async (req, res, next) => {
  try {
    req = matchedData(req);
    const user = await usersModel.findOne({
      where: { correo: req.correo },
    });
    if (user) {
      const hassPassword = user.contraseña;

      const check = await compare(req.contraseña, hassPassword);

      if (!check) {
        next(handleErrorHttp(res, "PASSWORD_INVALID", 401));
        return;
      }
      user.set("contraseña", undefined, { strict: false });
      const data = {
        token: await tokenSign(user),
        user,
      };
      res.setHeader("X-Foo", "bar");
      res.send({ data });
    } else {
      handleErrorHttp(res, "USER_NOT_EXITS", 404);
      return;
    }
  } catch (e) {
    console.log(e);
    handleErrorHttp(res, "ERROR_LOGIN_USER");
  }
};

const changeEmail = async (req, res, next) => {
  try {
    const user = await usersModel.findOne({
      where: { user_id: req.body.user_id },
    });
    if (user) {
      const hassPassword = user.contraseña;
      const check = await compare(req.body.contraseña, hassPassword);
      if (check) {
        const update = await user.update(
          {
            correo: req.body.newCorreo,
          },
          {
            where: { user_id: req.body.user_id },
          }
        );
        res.send({ update });
      } else {
        next(handleErrorHttp(res, "PASSWORD_INVALID", 401));
        return;
      }
    } else {
      handleErrorHttp(res, "USER_NOT_EXITS", 404);
      return;
    }
  } catch (e) {
    console.log(e);
  }
};
module.exports = { registerCtrl, loginCtrl, changeEmail };
