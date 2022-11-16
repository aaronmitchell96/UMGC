-- write your queries here

1. 

joins_exercise=# SELECT * FROM owners o LEFT JOIN vehicles v ON v.owner_id = o.id;

2. 

 SELECT first_name,last_name, COUNT(owner_id) AS count 
 FROM owners o JOIN vehicles v ON o.id = v.owner_id 
 GROUP BY (first_name,last_name) ORDER BY first_name;

 3. 

 SELECT first_name,last_name, ROUND(AVG(price)) as average_price, COUNT(owner_id)
FROM owners o JOIN vehicles v on o.id=v.owner_id
GROUP BY
(first_name,last_name)
HAVING
COUNT(owner_id) > 1 AND ROUND(AVG(PRICE)) > 10000
ORDER BY first_name DESC;