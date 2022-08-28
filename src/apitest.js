require('dotenv').config({path: './privateVariables.env'});
const apiKey =process.env.gmaps_apikey;
if (apiKey == null) { 
    console.log("Please input API Key for Google Maps into .env");
};