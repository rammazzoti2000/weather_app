
import './assets/styling/style.scss';
import * as searchWeather from './searchWeather';


document.getElementById('searchBtn').addEventListener('click', () => {
  const searchTerm = document.getElementById('searchInput').value.trim('');
  if (searchTerm) {
    searchWeather.searchWeatherImperial(searchTerm);
  }
});