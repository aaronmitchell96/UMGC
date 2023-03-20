"use strict";

const db = require("../db");
const { BadRequestError, NotFoundError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");

class Company {
  /** Create a company (from data), update db, return new company data.
   *
   * data should be { handle, name, description, numEmployees, logoUrl }
   *
   * Returns { handle, name, description, numEmployees, logoUrl }
   *
   * Throws BadRequestError if company already in database.
   * */

  static async create({ handle, name, description, numEmployees, logoUrl }) {
    const duplicateCheck = await db.query(
          `SELECT handle
           FROM companies
           WHERE handle = $1`,
        [handle]);

    if (duplicateCheck.rows[0])
      throw new BadRequestError(`Duplicate company: ${handle}`);

    const result = await db.query(
          `INSERT INTO companies
           (handle, name, description, num_employees, logo_url)
           VALUES ($1, $2, $3, $4, $5)
           RETURNING handle, name, description, num_employees AS "numEmployees", logo_url AS "logoUrl"`,
        [
          handle,
          name,
          description,
          numEmployees,
          logoUrl,
        ],
    );
    const company = result.rows[0];

    return company;
  }

  /** Find all companies.
   *
   * Returns [{ handle, name, description, numEmployees, logoUrl }, ...]
   * */

  // ADDED IMPLEMENTATION: QUERY STRING SEARCHES
  // SEARCH FOR COMPANIES IN THE QUERY STRING USING 'NAME', 'MIN_EMPLOYEES', or 'MAX_EMPLOYEES'
  // IF NO QUERY VARIABLES, RETURNS ALL COMPANIES

  static async findAll(name,min,max) {
    let count = 0;
    //conditional array will determine whether or not to use the WHERE or the AND in my SELECT statements avoiding syntax errors
    let conditional = [`WHERE`, `AND`];

    // ** starts off as a generic query to return all companies ***(this avoids un-necessary SELECT statements)
    let allCompanyQuery =  `SELECT handle,
    name,
    description,
    num_employees AS "numEmployees",
    logo_url AS "logoUrl"
    FROM companies`;

    //I then state conditionals that check if statements need to be added to the query string 
    // if its not defined in the query string, then the statement wont be added, again avoiding 
    // unecessary SELECT statements

    
    if (name != undefined){
      //If more than one conditional argument kicks in, the 'WHERE' will be kicked off of my conditional array,
      //and will be swithed to the 'AND' conditonal, allowing user to input more than one query variable
      count += 1;
      if (count > 1 && conditional.length > 1){
        conditional.shift()
      }
      
      allCompanyQuery += ` ${conditional[0]} LOWER(name) LIKE '${'%' + name.toLowerCase() + '%'}'`
    }
    if (min != undefined){
      count += 1;
      if (count > 1 && conditional.length > 1){
        conditional.shift()
      }
      allCompanyQuery +=  ` ${conditional[0]} companies.num_employees >= ${min}`
    }
    if (max != undefined){
      count += 1;
      if (count > 1 && conditional.length > 1){
        conditional.shift()
      }
      allCompanyQuery += ` ${conditional[0]} companies.num_employees <= ${max}`
    }

    //take whatever resulting query string and store all data from it
    const companyRes = await db.query(allCompanyQuery)

    const companies = companyRes.rows;

    //return resulting companies
    return companies;
  }

  /** Given a company handle, return data about company.
   *
   * Returns { handle, name, description, numEmployees, logoUrl, jobs }
   *   where jobs is [{ id, title, salary, equity, companyHandle }, ...]
   *
   * Throws NotFoundError if not found.
   **/

  static async get(handle) {
    const companyRes = await db.query(
          `SELECT handle,
                  name,
                  description,
                  num_employees AS "numEmployees",
                  logo_url AS "logoUrl"
           FROM companies
           WHERE handle = $1`,
        [handle]);

    const company = companyRes.rows[0];

    if (!company) throw new NotFoundError(`No company: ${handle}`);

    return company;
  }

  /** Update company data with `data`.
   *
   * This is a "partial update" --- it's fine if data doesn't contain all the
   * fields; this only changes provided ones.
   *
   * Data can include: {name, description, numEmployees, logoUrl}
   *
   * Returns {handle, name, description, numEmployees, logoUrl}
   *
   * Throws NotFoundError if not found.
   */

  static async update(handle, data) {
    const { setCols, values } = sqlForPartialUpdate(
        data,
        {
          numEmployees: "num_employees",
          logoUrl: "logo_url",
        });
    const handleVarIdx = "$" + (values.length + 1);

    const querySql = `UPDATE companies 
                      SET ${setCols} 
                      WHERE handle = ${handleVarIdx} 
                      RETURNING handle, 
                                name, 
                                description, 
                                num_employees AS "numEmployees", 
                                logo_url AS "logoUrl"`;
    const result = await db.query(querySql, [...values, handle]);
    const company = result.rows[0];

    if (!company) throw new NotFoundError(`No company: ${handle}`);

    return company;
  }

  /** Delete given company from database; returns undefined.
   *
   * Throws NotFoundError if company not found.
   **/

  static async remove(handle) {
    const result = await db.query(
          `DELETE
           FROM companies
           WHERE handle = $1
           RETURNING handle`,
        [handle]);
    const company = result.rows[0];

    if (!company) throw new NotFoundError(`No company: ${handle}`);
  }
}


module.exports = Company;
