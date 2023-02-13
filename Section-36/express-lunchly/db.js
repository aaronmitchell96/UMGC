/** Database for lunchly */

const pg = require("pg");

// const db = new pg.Client("postgresql:///lunchly");
const db = new pg.Client({
    host: 'localhost',
    database: 'lunchly',
    // user: 'aaron',
    password: '@Amitch1711'
  })

db.connect();

module.exports = db;
