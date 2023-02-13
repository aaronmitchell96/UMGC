const pg = require("pg");


let DB_URI;

// If we're running in test "mode", use our test db
// Make sure to create both databases!
DB_URI = "postgresql:///usersdb";


const db = new pg.Client({
  host: 'localhost',
  database: 'usersdb',
  password: '@Amitch1711'
})

db.connect()

module.exports = db;