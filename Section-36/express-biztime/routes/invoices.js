const express = require("express");
const ExpressError = require("../expressError")
const router = express.Router();
const db = require("../db");


router.get('/', async (req, res, next) => {
  try{
    const results =  await db.query(`SELECT * FROM invoices`);
    res.json({invoices: results.rows})
  } catch (e){
    return next(e)
  }
})

router.get("/:id", async function(req, res, next) {
    try {
      const results = await db.query(
        "SELECT * FROM invoices WHERE id = $1", [req.params.id]);
  
      if (results.rows.length === 0) {
        let notFoundError = new Error(`There is no invoice with id '${req.params.id}`);
        notFoundError.status = 404;
        throw notFoundError;
      }
      return res.json({ invoice: results.rows[0] });
    } catch (err) {
      return next(err);
    }
  });

  router.post("/", async function(req, res, next) {
    try {
      const result = await db.query(
        `INSERT INTO invoices
         (comp_code, amt) 
           VALUES ($1, $2) 
           RETURNING *`,
        [req.body.comp_code, req.body.amt]);
  
      return res.status(201).json({invoice: result.rows[0]});  // 201 CREATED
    } catch (err) {
      return next(err);
    }
  });
  
  router.delete("/:id", async function(req, res, next) {
    try {
      const result = await db.query(
        "DELETE FROM invoices WHERE id = $1 RETURNING id", [req.params.id]);
  
      if (result.rows.length === 0) {
        throw new ExpressError(`There is no invoice with id of '${req.params.id}`, 404);
      }
      return res.json({ message: "invoice deleted" });
    } catch (err) {
      return next(err);
    }
  });
  

module.exports = router;