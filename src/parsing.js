require('dotenv').config({path:'./privateVariables.env'});
import gmaps_apikey from '\privateVariables.env';
import {destination_address} from 'src\webInput.js';
import {origin_address} from 'src\webInput.js';


const apiKey =process.env.gmaps_apikey;

if (apiKey == null) { 
    console.log("Please input API Key for Google Maps into .env");
};

let destaddressToString = destination_address.toString();
console.log(destaddressToString);

let origaddressToString = origin_address.toString();
console.log(origaddressToString);

function parsedest() {        
    var apiDest =
    destaddressToString.replace(' St',' Street').replace(' Dr',' Drive').replace(' ','+').replace(",","").replace(" ","+");
    return apiDest;
    console.log(apiDest);
};


function parseorig() {        
    var apiOrig =
    origaddressToString.replace(' St',' Street').replace(' Dr',' Drive').replace(' ','+').replace(",","").replace(" ","+");
    return apiOrig;
    console.log(apiOrig);
};

function seturl(){
    var url = "https://www.google.com/maps/embed/v1/directions?key="+{apiKey}+"&origin="+{apiOrig}+"&destination="+{apiDest}+"&avoid=tolls";
    var jsonurl = "https://maps.googleapis.com/maps/api/directions/json?origin="+{apiOrig}+"&destination="+{apiDest}+"&avoid=tolls&key="+{apiKey};
    return jsonurl;
    return url;
    console.log(url);
};
export var apiDest;
export var apiOrig;
export var url;
export var jsonurl;
