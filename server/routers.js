const routers = require('express').Router();
const controllers = require('./controllers/index');

routers.get('/data', controllers.getMovies);

routers.post('/data', controllers.postMovie);

routers.patch('/data', controllers.patchMovie);


module.exports = routers;