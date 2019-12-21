var weather = require('./weather.js');
const prompt = require('prompt-sync')({signin: true});

console.log("===============================")
console.log("    WELCOME TO WEATHER APP")
console.log("===============================\n")

let cities = prompt("Please enter cities name (separated by ';'): ");

try {
  citiesList = cities.split(";");

  citiesList.forEach(city => {
    weather.getInfos(city.trim());
  })
}
catch (error) {
  console.log("Something went wrong. Please try again...")
}

/*
var cities = process.argv.slice(2);

cities.forEach(city => {
  weather.getInfos(city);
});
*/
