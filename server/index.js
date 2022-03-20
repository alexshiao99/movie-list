const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const db = require('./db/index');
// const morgan = require('morgan');
// const cors = require('cors');
const routers = require('./routers');

app.set('port', PORT);
// app.use(morgan('dev'));
app.use(express.json());
app.use('/', routers)

app.use(express.static('client/dist'));


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})