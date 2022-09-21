var express = require("express");
const {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");
const {
  validatorCreateEvent,
  validatorGetEvent,
} = require("../validators/events");

var router = express.Router();

/**
 * Crear Evento
 */

router.post("/", validatorCreateEvent, createEvent);

/**
 * Listar Eventos
 */

router.get("/", getEvents);

/**
 * Listar Evento
 */

router.get("/:id", validatorGetEvent, getEvent);

/**
 *  Actualizar Evento
 */

router.put("/:id", validatorGetEvent, validatorCreateEvent, updateEvent);

/**
 *  Borrar un Evento
 */

router.delete("/:id", validatorGetEvent, deleteEvent);

module.exports = router;
