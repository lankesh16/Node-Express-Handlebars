const mysql = require("mysql");
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "Malinda16*",
  database: "Burgers_db"
});
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log('works')
  console.log("connected as id " + connection.threadId);
});

// Export connection for ORM to use.

module.exports = connection;