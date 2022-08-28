require('dotenv').config({path: './privateVariables.env'});

const apiKey =process.env.gmaps_apikey;
console.log(apiKey)
//Input Variables for Address
//Current Location
//Parse Address

//Generate URL



// console.log("Where from?");

// var Orig_house = readLine("House Number?");
// var Orig_street = readLine("Street Name?");
// var Orig_city = readLine("City?");
// var Orig_state = readLine("State?");
// var Orig_zip = readLine("Zip?");

// console.log("Where to?");

// var Dest_house = readLine("House Number?");
// var Dest_street = readLine("Street Name?");
// var Dest_city = readLine("City?");
// var Dest_state = readLine("State?");
// var Dest_zip = readLine("Zip?");

// function modDest(
//     Dest_house.replace(' ','');
//     Dest_street.replace(' St',' Street').replace(' Dr',' Drive').replace(' ','+');
//     Dest_city.replace(' ',"+");
//     Dest_state.replace(' ',"+");
//     Dest_zip.replace(' ','');
//     var apiDest = Dest_house+"+"+Dest_street+"+"+Dest_city+"+"+Dest_state+"+"+Dest_zip
//     return apiDest;
//     );

// function aOrig{
//     Orig.split(' ')
//     var arrOrig = [house_number,street_name,orig_street_id,orig_city,orig_state,orig_zip];
//     arrOrig = arrOrig.map(x => parseInt(x));
//     .join('+').replace('.','').replace(',','').replace(' St','Street').replace(' Dr','Drive')
//     //PARSE ADDRESS
// };

// //function aDest(
//     //PARSE ADDRESS
// //    return apiDest;
// //);

// const mapURL = {
//     url : `https://maps.googleapis.com/maps/api/directions/json?origin=${apiOrig}&destination=${apiDest}&avoid=tolls&key=${apiKey}`
// }