require("dotenv").config;
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/myql");
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

/**
 *  *traemos todas las rutas que definimos
 */

app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log(`Example app listen at http://localhost:${port}`);
});

// dbConnect();
