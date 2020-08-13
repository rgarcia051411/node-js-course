const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
  console.log("Please provide and address");
} else {
  geocode(address, (error, { longitude, latitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }

    forecast(longitude, latitude, (error, forcastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(location);
      console.log(forcastData);
    });
  });
}
