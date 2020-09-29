DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar (30) NOT NULL,
    devoured boolean,
    PRIMARY KEY(id)
);

INSERT INTO burgers (burger_name)
VALUES ("Hamburger");

INSERT INTO burgers (burger_name)
VALUES ("Cheeseburger");

INSERT INTO burgers (burger_name)
VALUES ("Bacon Cheeseburger");

INSERT INTO burgers (burger_name)
VALUES ("Turkey Burger");