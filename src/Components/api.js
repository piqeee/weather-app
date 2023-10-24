const axios = require('axios');

export const geoApioptions = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_GEO_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_GEO_HOST
  }
};

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const WEA_API_URL = 'https://api.openweathermap.org/data/2.5';
export const WEA_API_KEY = process.env.REACT_APP_API_WEA_KEY;

