/** Database connection for messagely. */


const pg = require("pg");

const db = new pg.Client({
    host: 'localhost',
    database: 'messagely',
    password: '@Amitch1711'
  })

db.connect();


module.exports = db;
