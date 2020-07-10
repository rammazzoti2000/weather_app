
import './assets/styling/style.scss';
import searchWeather from './searchWeather';

const units = 'imperial';
let searchTerm = '';
document.getElementById('searchBtn').addEventListener('click', () => {
  searchTerm = document.getElementById('searchInput').value.trim('');
  if (searchTerm) {
    searchWeather(searchTerm, units);
  }
});

const buttonSwitch = document.querySelector('.toggle');

buttonSwitch.addEventListener('click', (event) => {
  if ((event.target.classList.contains('fahrenheit'))) {
    searchWeather(searchTerm, 'imperial');
  } else {
    searchWeather(searchTerm, 'metric');
  }
});