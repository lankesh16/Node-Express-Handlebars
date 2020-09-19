
DROP DATABASE IF EXISTS Burgers_db;
CREATE DATABASE Burgers_db;
USE Burgers_db;

CREATE TABLE Burgers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    burger_names VARCHAR(250) NOT NULL,
    devoured BOOLEAN default FALSE
);


