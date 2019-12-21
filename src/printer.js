function printMessage(city, temprature, pressure) {
  console.log(`*** In ${city}, the temprature is ${temprature} C and the pressure is ${pressure} hectopascals.\n`);
}

function printError(error) {
  console.error(error.message);
}

module.exports.printMessage = printMessage;
module.exports.printError = printError;
