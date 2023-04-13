var mysql = require("mysql");

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: "blogBase"
});

module.exports = con;