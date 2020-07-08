
import './assets/styling/style.scss';
import searchWeather from './searchWeather';

document.getElementById('searchBtn').addEventListener('click', () => {
  const searchTerm = document.getElementById('searchInput').value;
  if (searchTerm) {
    searchWeather(searchTerm);
  }
});