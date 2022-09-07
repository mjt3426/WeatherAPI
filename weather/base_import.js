require('dotenv').config({path:'./privateVariables.env'});

import Weather_Directions from 'src/privateVariables.env';
import full_Trip from 'src/tripVariables.js'
import trip_Duration from 'src/tripVariables.js'
import Get from 'src/tripVariables.js'

const weatherAPI =process.env.Weather_Directions;
let destLAT =full_Trip['routes'][0]['legs'][0]['end_location']['lat'];
let destLONG =full_Trip['routes'][0]['legs'][0]['end_location']['lng'];

function durationtoUNIX(startUNIX){
    var durationUNIX = trip_Duration.replace("hours","").replace("mins","").split(" ");
    var tripHOUR = durationUNIX[0];
    var tripMIN = durationUNIX[1];
    var unix_timestamp = startUNIX+(tripHOUR*3600)+(tripMIN*60);
    return unix_timestamp;
};

function setweatherURL(){
    let weatherURL = "https://api.openweathermap.org/data/2.5/forecast/hourly?lat="+{destLAT}+"&lon="+{destLONG}+"&exclude=daily&appid="+{weatherAPI}+"$dt="+{unix_timestamp};
return weatherURL;
};
setweatherURL();


var weatherRESPONSE = Get(weatherURL);
var weather = JSON.parse(weatherRESPONSE);

