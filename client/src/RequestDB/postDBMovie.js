const axios = require('axios');

let path = 'http://localhost:3000/data';

var postDBMovie = function(movie) {
  axios.post(path, movie)
  .then((result) => {return result});
}

export default postDBMovie;