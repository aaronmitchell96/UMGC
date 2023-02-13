/** Database setup for BizTime. */
const pg = require('pg')

const db = new pg.Client({
    host: 'localhost',
    database: 'biztime',
    password: '@Amitch1711'
  })

  db.connect()
  
  module.exports = db;
