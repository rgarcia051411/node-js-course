
const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicmdhcmNpYTA1MTQxMSIsImEiOiJja2N6YWxzN3owYjhxMnZxMGM4NXEzNDdmIn0.-1iI08LSLxLH-FyeJgtAhA&limit=1'
  
    request({url, json: true}, (error, { body } ) => { //short hand syntax used. old(url:url) response was deconstructed to {body} orignal {response}
       
        if(error){
            callback("Unable to connect to Location Services!", undefined)
        } else if(body.features.length === 0){
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                laongitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    })
  };
  
 


  module.exports = geocode;

  