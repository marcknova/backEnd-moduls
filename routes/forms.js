var express = require("express");
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/forms");
const checkRol = require("../middleware/role");
const authMiddleware = require("../middleware/sesion");
const {
  validatorCreateItem,
  validatorGetItem,
} = require("../validators/forms");
var router = express.Router();

/**
 * Lista todos los formularios
 */
router.get(
  "/",
  authMiddleware,
  checkRol(["user", "admin", "contador"]),
  getItems
);

/**
 * Lista un formulario por ID
 */
router.get(
  "/:id",
  validatorGetItem,
  authMiddleware,
  checkRol(["admin", "contador"]),
  getItem
);

/**
 * Crea un nuevo formulario
 */
router.post(
  "/",
  validatorCreateItem,
  authMiddleware,
  checkRol(["user", "admin"]),
  createItem
);

/**
 * Actualizar formulario
 */
router.put(
  "/:id",
  validatorGetItem,
  validatorCreateItem,
  authMiddleware,
  checkRol(["admin", "contador"]),
  updateItem
);

/**
 * Eliminar formulario
 */
router.delete(
  "/:id",
  validatorGetItem,
  authMiddleware,
  checkRol(["admin", "contador"]),
  deleteItem
);

module.exports = router;
