const axios = require("axios");

const getRates = () => {
  const API_KEY = "";
  const URL = `http://data.fixer.io/api/latest?access_key=${API_KEY}`;
  axios.get(URL).then(res => {
    return res.data.rates;
  });
};
