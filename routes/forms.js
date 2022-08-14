var express = require("express");
const { getItems, getItem, createItem } = require("../controllers/forms");
var router = express.Router();

/* GET users listing. */
router.get("/", getItems);
router.post("/", createItem);
router.get("/:id", getItem);

module.exports = router;
