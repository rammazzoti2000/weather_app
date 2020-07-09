import init from './init';

let searchMethod;

const getSearchMethod = (searchTerm) => {
  // eslint-disable-next-line radix
  if (searchTerm.length === 5 && `${Number.parseInt(searchTerm)}` === searchTerm) searchMethod = 'zip';
  else searchMethod = 'q';
};

const searchWeather = (searchTerm) => {
  const appId = '31fbe75b00972a42dd7b94da28403791';
  getSearchMethod(searchTerm);
  fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}`)
    .then((result) => result.json())
    .then((res) => {
      init(res);
    })
    .catch((error) => {
      // eslint-disable-next-line no-alert
      alert('Input a valid city name!');
      throw new Error(error.message);
    });
};

export default searchWeather;