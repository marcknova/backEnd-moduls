const { formsModel } = require("../models");

//TODO donde se iniciara todo

/**
 * Obtener los registros
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  await formsModel.findAll().then((data) => {
    res.send(data);
    console.log(data);
  });
};

/**
 * Obtener un registro
 * @param {*} req
 * @param {*} res
 */
const getItem = (req, res) => {};

/**
 * Crear un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  const { body } = req;
  console.log(body);
  const data = formsModel.create(body);
  res.send({ data });
};

/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updateItem = (req, res) => {};

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
