require("dotenv").config;
const express = require("express");
const cors = require("cors");
const morganBody = require("morgan-body");
const { dbConnectMysql } = require("./config/myql");
const loggerStream = require("./utils/handleLogger");
const app = express();

const ENGINE_DB = process.env.ENGINE_DB;

app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

morganBody(app, {
  noColors: true,
  stream: loggerStream,
  skip: function (req, res) {
    return res.statusCode < 400; //TODO 2xx 3xx
  },
});
const port = process.env.PORT || 3000;

/**
 *  * Traemos todas las rutas que definimos
 */

app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log(`App listen at http://localhost:${port}`);
});

dbConnectMysql();
// ENGINE_DB === "mysql" ? dbConnectMysql() : null;
