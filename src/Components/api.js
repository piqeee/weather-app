const axios = require('axios');

export const geoApioptions = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo',
  headers: {
    'X-RapidAPI-Key': 'b69de9973emsha9f2245d4db27ffp15db47jsn5c0f1751fae3',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const WEA_API_URL = 'https://api.openweathermap.org/data/2.5';
export const WEA_API_KEY = 'e2860b756f1b314224dd674539908177';

