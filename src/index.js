
import './assets/styling/style.scss';
import searchWeather from './searchWeather';

document.getElementById('searchBtn').addEventListener('click', () => {
  const searchTerm = document.getElementById('searchInput').value.trim('');
  if (searchTerm) {
    searchWeather(searchTerm);
  }
});