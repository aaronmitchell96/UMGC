DROP DATABASE IF EXISTS medical_center;

CREATE DATABASE medical_center;

\c medical_center

CREATE TABLE doctors
(
  doctor_id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL
);

CREATE TABLE patients
(
  doctor_id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL
);

CREATE TABLE diagnosis
(
  id SERIAL PRIMARY KEY,
  doctor_id INT,
  patient_id INT,
  diagnosis TEXT
);

INSERT INTO doctors 
    (first_name,last_name)
VALUES
    ('Manisha','Raj'),
('John', 'Macadoo'),
('Barbara','Mcain'),
('Cindy','Lewis'),
('Jake', 'Johnson');

INSERT INTO patients 
    (first_name,last_name)
VALUES
    ('Jennifer','Johnson'),
('Robert', 'Regan'),
('Leonard','Middleton'),
('Cheryl','Middleton'),
('Sean', 'Llago');

INSERT INTO diagnosis 
    (doctor_id,patient_id,diagnosis)
VALUES
    (1,4,'Sore on Leg'),
(2,3,'Lukemia'),
(2,5,'Dislocated finger'),
(4,1,'Broken arm'),
(1,5,'Gunshot wound')