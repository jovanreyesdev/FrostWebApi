const express = require('express');
const axios = require('../utils/axios');

const router = express.Router();

const { API_BASE_URI, API_CLIENT_ID } = process.env;

const sourceController = () => {
  router.get('/get', async (req, res) => {
    const response = await axios
      .get('/sources/v0.jsonld?types=SensorSystem&country=NO&municipality=HALDEN');

    res.send({
      ...response.data,
    });
  });

  return router;
};

module.exports = sourceController;
