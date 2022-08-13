const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname; //TODO Ruta absoluta

/**
 * *esto nos devulve un array con los archivos dentro de routes
 * fs.readdirSync(path.join(__dirname)
 */

const removeExtension = (fileName) => {
  //TODO conseguimos el nombre de archivo sin la extension
  return fileName.split(".").shift();
};

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file);
  if (name !== "index") {
    console.log(`Cargando ruta ${name}`);
    router.use(`/${name}`, require(`./${file}`));
  }
});

module.exports = router;
