const axios = require('axios');
import API from '../../config/config.js';

let path = 'https://api.themoviedb.org/3/search/movie?'

var SearchMovies = (query, callback) => {
  return (
    axios.get(path, {
      params: {
        api_key: '5ba80deeeed670b292ecb7633a902f11',
        query: query
      }
    })
    .then((results) => {
      let searched = results.data.results[0];
      let newMovie = {watched: false};
      newMovie['title'] = searched['original_title'];
      newMovie['Year'] = searched['release_date'].slice(0,4);
      newMovie['imdbRating'] = searched['vote_average'];
      return newMovie;
    })
  )
}

export default SearchMovies;