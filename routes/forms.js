var express = require("express");
const { getItems, getItem } = require("../controllers/forms");
var router = express.Router();

/* GET users listing. */
router.get("/", getItems);
router.get("/:id", getItem);

module.exports = router;
