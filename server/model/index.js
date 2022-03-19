const db = require('../db');

module.exports.getMovies = function() {
  return new Promise((resolve, reject) => {
    db.connection.query(`SELECT * FROM movies`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    })
  })
}

module.exports.postMovie = function(movie) {
  let title = movie.title;
  let watched = movie.watched ? 1 : 0;
  let release_year = movie.Year;
  let imdbRating = movie.imdbRating;
  return new Promise((resolve, reject) => {
    db.connection.query(`INSERT INTO movies
      VALUES (NULL, "${title}", "${watched}", "${release_year}", "${imdbRating}")`, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
    })
  })
}

module.exports.patchMovie = function(movie) {
  let watched = movie.watched ? 1 : 0;
  let id = movie.id;
  return new Promise((resolve, reject) => {
    db.connection.query(`UPDATE movies
    SET watched = "${watched}"
    WHERE id = "${id}"`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    })
  })
}