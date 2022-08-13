var mysql = require("mysql");

const dbConnect = () => {
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
  });

  con.connect((err) => {
    if (!err) {
      console.log("****** CONEXION CORRECTA ********");
    } else {
      console.log("****** CONEXION FAILED ********");
    }
  });
};

module.exports = dbConnect;
