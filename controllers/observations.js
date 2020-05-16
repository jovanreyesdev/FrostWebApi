const express = require('express');
const axios = require('../utils/axios');

const router = express.Router();

const { API_BASE_URI, API_CLIENT_ID } = process.env;

const observationController = () => {
  router.get('/get/:sourceId?', async (req, res) => {

    const { sourceId } = req.params;
    const { range } = req.query;

    const response = await axios
      .get(`/observations/v0.jsonld?sources=SN18700&referencetime=${range}&elements=air_temperature%2Cwind_speed%2Cboolean_fair_weather(cloud_area_fraction%20P1D)`);

    res.send({
      ...response.data,
    });
  });

  return router;
};

module.exports = observationController;
