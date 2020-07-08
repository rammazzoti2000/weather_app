import './assets/styling/style.scss';

window.addEventListener('load', () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector('.temperature-description');
  let temperatureDegree = document.querySelector('.temperature-degree');

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
          console.log(data);
          const { temperature, summary } = data.currently;
        });
    });
  }
});