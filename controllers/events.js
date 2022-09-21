const { matchedData } = require("express-validator");
const { eventsModel } = require("../models");
const { handleErrorHttp } = require("../utils/handleError");

/**
 * Obteber los eventos
 *
 */

const getEvents = async (req, res) => {
  try {
    await eventsModel.findAll().then((data) => {
      res.send(data);
    });
  } catch (e) {
    handleErrorHttp(res, "ERROR_GET_EVENTS");
  }
};

const getEvent = async (req, res) => {
  try {
    req = matchMedia(req);
    const { id } = req;
    const data = await eventsModel.findByPk(id);
    res.send({ data });
  } catch (e) {
    handleErrorHttp(res, "ERROR_GET_ITEM");
  }
};

const createEvent = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await eventsModel.create(body);
    res.send({ data });
  } catch (e) {
    handleErrorHttp(res, "ERROR_CREATE_EVENT");
  }
};

const updateEvent = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await eventsModel.update(body, {
      where: {
        id: id,
      },
    });
    res.send({ data });
  } catch (e) {
    handleErrorHttp(res, "ERROR_UPDATE_EVENT");
  }
};

const deleteEvent = async (req, res) => {
  try {
    console.log(req);
    const { id } = matchedData(req);
    const data = await eventsModel.destroy({ where: { id: id } });
    res.send(data);
  } catch (e) {
    console.log(e);
    handleErrorHttp(res, "ERROR_DELETE_EVENT");
  }
};

module.exports = { getEvents, getEvent, createEvent, updateEvent, deleteEvent };
