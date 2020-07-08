// import getSearchMethod from './getSearchMethod';
import init from './init';

let searchMethod;

const getSearchMethod = (searchTerm) => {
  // eslint-disable-next-line radix
  if (searchTerm.length === 5 && `${Number.parseInt(searchTerm)}` === searchTerm) searchMethod = 'zip';
  else searchMethod = 'q';
};

const searchWeather = (searchTerm) => {
  const appId = '71f6779186cc32448b4c412eea65b982';
  const units = 'metric';
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  getSearchMethod(searchTerm);
  fetch(`${proxy}http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`)
    .then((result) => result.json())
    .then((res) => {
      init(res);
    })
    .catch((error) => {
      // eslint-disable-next-line no-alert
      alert('Input a valid city name!\nMake sure there is no empty space\nbefore and after the city name!');
      throw new Error(error.message);
    });
};

export default searchWeather;