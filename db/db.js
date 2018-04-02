var mysql = require('mysql');
var config = require('./config');
//Configuration for mysql db
const HOST = config.host;
const USER = config.user;
const PASSWORD = config.password;
const DATABASE = config.database;

var connection = mysql.createConnection({
  host     : HOST,
  user     : USER,
  password : PASSWORD,
  database : DATABASE,
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;