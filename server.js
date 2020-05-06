require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const sourcesController = require('./controllers/sources');
const observationsController = require('./controllers/observations');

const server = express();

server.use(bodyParser.json());

server.use(bodyParser.urlencoded({ extended: true }));

server.use('/sources', sourcesController());
server.use('/observations', observationsController());

const port = process.env.PORT || 8080;

server.listen(port, (err) => {
  if (err) throw err;
  console.log(`Sever Running on port: ${port}`);
});
