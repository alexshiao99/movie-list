CREATE DATABASE movieList;

USE movieList;

CREATE TABLE movies (
  id INT AUTO_INCREMENT NOT NULL UNIQUE,
  title VARCHAR(50) NOT NULL,
  watched INT(1) NOT NULL DEFAULT 0,
  release_year INT,
  imdbRating DECIMAL(3,1),
  PRIMARY KEY (id)
);