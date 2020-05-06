const axios = require('axios');

const { API_BASE_URI, API_CLIENT_ID } = process.env;

const instance = axios.create({
  baseURL: API_BASE_URI,
  auth: {
    username: API_CLIENT_ID,
    password: '',
  },
  headers: {
    Accept: 'application/json',
  },
});

module.exports = instance;
