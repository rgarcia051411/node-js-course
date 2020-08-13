const request = require('postman-request');


const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4d6180b1e18a052716cb1b7445145a64&query='+ latitude +',' + longitude +'&units=f'

    request({url, json: true}, (error, { body }) => { //short hand syntax used. old(url:url) 
        if(error){
            callback('Unable to connect to weather service!', undefined);
        } else if(body.error) {
            callback("Unable to find Location", undefined);
        } else {
            callback(undefined, ` ${body.current.weather_descriptions[0]} : It is currently: ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`)
        }

    });
}

module.exports = forecast;

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

