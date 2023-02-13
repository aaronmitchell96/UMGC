/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client({
    host: 'localhost',
    database: 'lunchly',
    password: '@Amitch1711'
  })

db.connect();

module.exports = db;
