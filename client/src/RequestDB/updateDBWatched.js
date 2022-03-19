const axios = require('axios');

let path = 'http://localhost:3000/data';

var updateDBWatched = function(movie) {
  return (
    axios.patch(path, movie)
  )
}

export default updateDBWatched;