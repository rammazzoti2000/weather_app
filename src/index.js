import './assets/styling/style.scss';

window.addEventListener('load', () => {
  let long;
  let lat;
  const temperatureDescription = document.querySelector('.temperature-description');
  const temperatureDegree = document.querySelector('.temperature-degree');
  const locationTimeZone = document.querySelector('.location-timezone');
  const weatherIcon = document.querySelector('.icon');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = 'https://cors-anywhere.herokuapp.com/';
      const api = `${proxy}https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&
      exclude=minutely,hurly,daily&appid=830135a8b4487d127daad9365fad5297`;

      fetch(api)
        .then(response => response.json())
        .then(data => {
          const { temp, weather } = data.current;
          const { icon } = data.current.weather[0];
          console.log(data);
          // Set DOM elements from the api
          temperatureDegree.textContent = temp;
          temperatureDescription.textContent = weather[0].description;
          locationTimeZone.textContent = data.timezone;
          // Set Icon`
          weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png">`;
        });
    });
  }
});