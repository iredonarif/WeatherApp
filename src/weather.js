var http = require('http');
var printer = require('./printer');

function getInfos(city) {
  var request = http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c4b846e7625772bc6629dd2728fe22ed&units=metric`,
  function(response) {

    var body = '';

    response.on('data', (chunk) => {
      body += chunk;
    });

    response.on('end', () => {
      if (response.statusCode === 200) {
        try {
          var weatherData = JSON.parse(body);
          printer.printMessage(city, weatherData.main.temp, weatherData.main.pressure);
        }
        catch (error) {
          printer.printError({message: `${city}: This city is unknown\n`})
        }
      }
      else {
        printer.printError({message: `${city}: We can't get this city's informations\n`})
      }
    });
  });

  request.on('error', printer.printError);
}

module.exports.getInfos = getInfos;
