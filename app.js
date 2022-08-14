require("dotenv").config;
const express = require("express");
const cors = require("cors");
const { dbConnectMysql } = require("./config/myql");
const app = express();

const ENGINE_DB = process.env.ENGINE_DB;

app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

const port = process.env.PORT || 3000;

/**
 *  *traemos todas las rutas que definimos
 */

app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log(`App listen at http://localhost:${port}`);
});

dbConnectMysql();
// ENGINE_DB === "mysql" ? dbConnectMysql() : null;
