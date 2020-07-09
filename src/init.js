import setPositionForWeatherInfo from './setPosition';
import Image1 from './assets/images/clearPicture.jpg';
import Image2 from './assets/images/cloudyPicture.jpg';
import Image3 from './assets/images/rainPicture.jpg';
import Image4 from './assets/images/mistPicture.jpg';
import Image5 from './assets/images/stormPicture.jpg';
import Image6 from './assets/images/snowPicture.jpg';

const init = (resultFromServer) => {
  switch (resultFromServer.weather[0].main) {
    case 'Clear':
      document.body.style.backgroundImage = `url('${Image1}')`;
      break;

    case 'Clouds':
      document.body.style.backgroundImage = `url('${Image2}')`;
      break;

    case 'Rain':
    case 'Drizzle':
      document.body.style.backgroundImage = `url('${Image3}')`;
      break;

    case 'Mist':
      document.body.style.backgroundImage = `url('${Image4}')`;
      break;

    case 'Thunderstorm':
      document.body.style.backgroundImage = `url('${Image5}')`;
      break;

    case 'Snow':
      document.body.style.backgroundImage = `url('${Image6}')`;
      break;

    default:
      break;
  }

  const weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
  const temperatureElement = document.getElementById('temperature');
  const humidityElement = document.getElementById('humidity');
  const windSpeedElement = document.getElementById('windSpeed');
  const cityHeader = document.getElementById('cityHeader');
  const buttonSwitch = document.querySelector('.toggle');

  const weatherIcon = document.getElementById('documentIconImg');
  weatherIcon.src = `http://openweathermap.org/img/w/${resultFromServer.weather[0].icon}.png`;

  const resultDescription = resultFromServer.weather[0].description;
  // eslint-disable-next-line max-len
  weatherDescriptionHeader.innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);
  temperatureElement.innerHTML = `${Math.floor(resultFromServer.main.temp)}&deg; F`;
  windSpeedElement.innerHTML = `Wind Speed: ${Math.floor(resultFromServer.wind.speed)} meter/s`;
  cityHeader.innerHTML = resultFromServer.name;
  humidityElement.innerHTML = `Humidity levels: ${resultFromServer.main.humidity}%`;

  // eslint-disable-next-line radix
  const celsius = `${Math.floor(parseInt(resultFromServer.main.temp - 32) * (5 / 9))}&deg; C`;
  const fahrenheit = `${Math.floor(resultFromServer.main.temp)}&deg; F`;
  buttonSwitch.addEventListener('click', (event) => {
    if ((event.target.classList.contains('fahrenheit'))) {
      temperatureElement.innerHTML = fahrenheit;
    } else {
      temperatureElement.innerHTML = celsius;
    }
  });

  setPositionForWeatherInfo();
};

export default init;