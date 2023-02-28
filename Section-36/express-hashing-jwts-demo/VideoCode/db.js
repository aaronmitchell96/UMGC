/** Database for auth-api demo. */
const pg = require("pg");

const db = new pg.Client({
  host: 'localhost',
  database: 'express_auth',
  password: '@Amitch1711'
})

db.connect()
module.exports = db;
