require('dotenv').config({path:'./privateVariables.env'});
import gmaps_apikey from 'src\privateVariables.env';

function way_input(q,r,s,t,u){
    var q = document.getElementById($(q));
    var r = document.getElementById($(r));
    var s = document.getElementById($(s));
    var t = document.getElementById($(t));
    var u = document.getElementById($(u));
    return q & r & s &t & u;
    console.log(q+r+s+t+u);
};

way_input(dest_house, dest_street, dest_city, dest_state,dest_zip);

way_input(orig_house, orig_street, orig_city, orig_state,orig_zip);


function setWay(x){
    var y = x.substring(0,3);
    $address = (x+"_address");
    var $address = []
        y+"_house"[0];
        y+"_street"[1];
        y+"_city"[2];
        y+"_state"[3];
        y+"_zip"[4];
return $address;
};

seyWay("destination");
setWay("origin");


export var destination_address;
export var origin_address;