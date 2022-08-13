//TODO donde se iniciara todo

/**
 * Obtener los registros
 * @param {*} req
 * @param {*} res
 */
const getItems = (req, res) => {
  const data = ["Hola", "John"];
  res.send({ data });
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
  res.send({ algo: 1 });
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
