const { matchedData } = require("express-validator");
const sequelize = require("sequelize");
const { formsModel } = require("../models");
const { productsModel } = require("../models");
const { handleErrorHttp } = require("../utils/handleError");

//TODO donde se iniciara todo

/**
 * Obtener los registros
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    const user = req.user;
    user.set("contraseña", undefined, { strict: false });
    await formsModel.findAll().then((data) => {
      res.send({ data, user });
    });
  } catch (e) {
    console.log(e);
    handleErrorHttp(res, "ERROR_GET_ITMES");
  }
};

/**
 * Obtener un registro
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await formsModel.findByPk(id);
    res.send({ data });
  } catch (e) {
    handleErrorHttp(res, "ERROR_GET_ITEM");
  }
};

/**
 * Crear un registro
 * @param {*} req
 * @param {*} res
 */

const createItem = async (req, res) => {
  try {
    const user = req.user;
    user.set("contraseña", undefined, { strict: false });
    const body = matchedData(req);
    const requisicion = await formsModel.create(body);
    res.send({ requisicion, user });
    let cont = 0;
    let productos = [];
    const id_req = requisicion.dataValues.id_req;
    for (let i = 0; i < req.body.data.length; i++) {
      let data = { ...req.body.data[i], id_product: cont++, id_req };
      productos.push(data);
    }
    productsModel.bulkCreate(
      productos,
      { ignoreDuplicates: true },
      { individualHooks: true }
    );
  } catch (e) {
    console.log(e);
    handleErrorHttp(res, "ERROR_CREATE_ITMES");
  }
};

/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await formsModel.update(body, {
      where: {
        id: id,
      },
    });
    res.send({ data });
  } catch (e) {
    handleErrorHttp(res, "ERROR_UPDATE_ITMES");
  }
};

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await formsModel.destroy({ where: { id: id } });
    res.send({ data });
  } catch (e) {
    handleErrorHttp(res, "ERROR_DELETE_ITEM");
  }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
