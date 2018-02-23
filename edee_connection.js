var mysql = require("mysql");

var con = mysql.createConnection({
  host: "c.edee",
  user: "db",
  password: "db",
  database: "db"
});
console.log("hi");
con.connect(function(err) {
  if (err) {
    throw err;
  }
  con.query("SELECT * FROM EDEE_SOURCE", function(err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
