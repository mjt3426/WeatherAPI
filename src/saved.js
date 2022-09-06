require('dotenv').config({path:'./privateVariables.env'});
import {gmaps_apikey} from 'src\privateVariables.env';
import {destination_address} from 'src\webInput.js';
import {origin_address} from 'src\webInput.js';
import {apiDest} from 'parsing.js';
import {apiOrig} from 'parsing.js';
import { stringify } from 'querystring';
const fs = require('fs');

function desttoJSON(){
    var destJSON = JSON.stringify(destination_address);
    return destJSON
};
function origtoJSON(){
    var origJSON = JSON.stringify(origin_address);
    return origJSON
};

function favoriteADDRESS(x, y){
    var obj = JSON.parse(x);
    obj[$addressTAG]['Favorited']= y;
    return y
};

function savedJSON($inputJSON, $addressTAG){
    var y = $addressTAG.substring(0,4);
    var $addressJSON = {
        $addressTAG:{
            "Favorited":{$toSAVE},
            $inputJSON}
    };
    return $addressJSON
};

function writetoJSON($addressJSON){
    if ($addressJSON[$addressTAG]['Favorited'] == 1){
        fs.writeFile("saved\addresses.json", $addressJSON, 'utf8', function (err) {
            if (err) {
                console.log("An error occured while saving address.");
                return console.log(err);
            };
            console.log("Address has been saved.");
        });
    return;
    }
}