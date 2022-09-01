const { matchedData } = require("express-validator");
const { usersModel } = require("../models");
const { handleErrorHttp } = require("../utils/handleError");

//TODO donde se iniciara todo

/**
 * Obtener los registros
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    await usersModel.findAll().then((data) => {
      res.send(data);
    });
  } catch (e) {
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
    const data = await usersModel.findByPk(id);
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
    const body = matchedData(req);
    const data = usersModel.create(body);
    res.send({ data });
  } catch (e) {
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
    const data = await usersModel.update(body, {
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
    const data = await usersModel.destroy({ where: { id: id } });
    res.send({ data });
  } catch (e) {
    handleErrorHttp(res, "ERROR_DELETE_ITEM");
  }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
