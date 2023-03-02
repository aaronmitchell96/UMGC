/** Database config for database. */


const pg = require("pg");

const db = new pg.Client({
  host: 'localhost',
  database: 'books',
  password: '@Amitch1711'
})

db.connect();


module.exports = db;
