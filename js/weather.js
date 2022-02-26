const API_KEY = "920c384a44867e5643c8d0e97237be2c";
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather?";

const weatherInit = () => {
  navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
};

const onGeoError = () => {
  alert(`Can't find you. No weather for you!`);
};

const onGeoSuccess = async (position) => {
  const { latitude, longitude } = position.coords;
  const weatherApiUrl = getWeatherApiUrl(latitude, longitude);
  const weatherData = await getWeatherData(weatherApiUrl);
  printWeatherData(weatherData);
};

const getWeatherApiUrl = (lat, lon) => {
  return `${WEATHER_API_URL}lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
};

const getWeatherData = async (url) => {
  const data = await (await fetch(url)).json();
  return data;
};

const printWeatherData = (weatherData) => {
  const name = weatherData.name;
  const weather = weatherData.weather[0].main;
  const temperature = weatherData.main.temp;

  const citySpan = document.querySelector(".weather .city");
  const weatherSpan = document.querySelector(".weather .weather-data");
  weatherSpan.innerText = `${weather} ${temperature}°`;
  citySpan.innerText = name;
};

weatherInit();
