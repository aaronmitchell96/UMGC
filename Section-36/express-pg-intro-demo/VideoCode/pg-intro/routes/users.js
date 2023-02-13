/** Routes for users of pg-intro-demo. */
const express = require("express");
const ExpressError = require("../expressError")
const router = express.Router();
const db = require("../db");


router.get('/', async (req, res, next) => {
  try{
    const results =  await db.query(`SELECT * FROM users`);
    res.json(results.rows)
  } catch (e){
    return next(e)
  }
})

module.exports = router;