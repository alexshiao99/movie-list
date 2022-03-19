var models = require('../model/index');

module.exports = {
  getMovies: function(req, res) {
    models.getMovies()
    .then((results) => {
      results.forEach((movie) => {
        movie.watched = movie.watched === 1 ? true : false
      })
      return results;
    }).then((results) => {res.send(results); });
  },

  postMovie: function(req, res) {
    models.postMovie(req.body)
    .then((result) => {res.status(201).send(result)});
  },

  patchMovie: function(req, res) {
    models.patchMovie(req.body)
    .then((result) => {res.status(204).send(result); })
  }
}