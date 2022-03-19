const axios = require('axios');
let path = 'http://localhost:3000/data';

var getDBMovies = function() {
  return (
    axios.get(path, {})
    .then((results) => { return results.data; })
  )
}

export default getDBMovies;