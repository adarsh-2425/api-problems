//using openweather api
const axios = require("axios");
const apiKey = process.env.apiKey; //you will get api key after signing on openweather map

//asynchronous function to retrieve data
async function getWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

//promise
getWeather('London')
  .then(weatherData => console.log(weatherData))
  .catch(err => console.error(err.message));
