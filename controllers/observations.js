const express = require('express');

const router = express.Router();

const observationController = () => {
  router.get('/get', (req, res) => {
    res.send({ message: 'Hello World!' });
  });

  return router;
};

module.exports = observationController;
