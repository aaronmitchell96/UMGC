const express = require("express");
const ExpressError = require("../expressError")
const router = express.Router();
const db = require("../db");


router.get('/', async (req, res, next) => {
  try{
    const results =  await db.query(`SELECT * FROM companies JOIN invoices on comp`);
    res.json({companies: results.rows})
  } catch (e){
    return next(e)
  }
})

router.get("/:code", async function(req, res, next) {
    try {
      const results = await db.query(
        "SELECT code, name, description FROM companies WHERE code = $1", [req.params.code]);
  
      if (results.rows.length === 0) {
        let notFoundError = new Error(`There is no company with code '${req.params.code}`);
        notFoundError.status = 404;
        throw notFoundError;
      }
      return res.json({ company: results.rows[0] });
    } catch (err) {
      return next(err);
    }
  });

router.post("/", async function(req, res, next) {
    try {
      const result = await db.query(
        `INSERT INTO companies
         (code, name, description) 
           VALUES ($1, $2, $3) 
           RETURNING *`,
        [req.body.code, req.body.name, req.body.description]);
  
      return res.status(201).json({company: result.rows[0]});  // 201 CREATED
    } catch (err) {
      return next(err);
    }
  });
  
  router.delete("/:code", async function(req, res, next) {
    try {
      const result = await db.query(
        "DELETE FROM companies WHERE code = $1 RETURNING code", [req.params.code]);
  
      if (result.rows.length === 0) {
        throw new ExpressError(`There is no company with code '${req.params.code}`, 404);
      }
      return res.json({ message: "company deleted" });
    } catch (err) {
      return next(err);
    }
  });

  
module.exports = router;