import {jsonurl} from 'parsing.js';

function Get(x){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", x ,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
};

var response = Get(jsonurl);
var full_Trip = JSON.parse(response);

console.log(full_Trip);

trip_Polyline=(full_Trip['routes'][0]['overview_polyline']['points']);
trip_Duration=(full_Trip['routes'][0]['legs'][0]['duration']['text']);
trip_Geofence=(full_Trip['routes'][0]['bounds']);

console.log(trip_Polyline);
console.log(trip_Duration);
console.log(trip_Geofence);

export var trip_Polyline;
export var trip_Duration;
export var trip_Geofence;