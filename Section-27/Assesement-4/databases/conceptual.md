### Conceptual Exercise

Answer the following questions below:

- What is PostgreSQL?

PostgreSQL is one of many database systems

- What is the difference between SQL and PostgreSQL?

postgresql is open source, where sql is owned by miscrosoft 

- In `psql`, how do you connect to a database?

\c

- What is the difference between `HAVING` and `WHERE`?

 “HAVING” clause: It is used to filter records from the groups based on the specified condition. “WHERE” clause : It is used to filter records from the table based on the specified condition.

- What is the difference between an `INNER` and `OUTER` join?

A full outer join will instantly join two tables, regardless of whether content is null or not, where a inner join will leave out nullified columns is not present 

- What is the difference between a `LEFT OUTER` and `RIGHT OUTER` join?

left join will leave columns on left side regardless if null or not, while right side will do the exact same, but on the right side 

- What is an ORM? What do they do?

orm, or object relational mapping, uses an object-oriented paradigm to create, query, and manipulate data stored in a database. It is a software layer between the actual database and the applications used for database management.

- What are some differences between making HTTP requests using AJAX 
  and from the server side using a library like `requests`?

-ajax sends all of its data in a single request, where as a server side request sends its data in multiple requests 
-server side uses json to communicate 

- What is CSRF? What is the purpose of the CSRF token?

cross-site request forgery. purpose of csrf token is to validate the devoloper is making the server side request, not some random person 

- What is the purpose of `form.hidden_tag()`?

to make certain elements in the dom such as csrf
