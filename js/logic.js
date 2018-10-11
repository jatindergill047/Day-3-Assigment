function geoLoc(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
}

function geoError(error) {
    alert("Error! Somthing went wrong");
}


navigator.geolocation.getCurrentPosition(geoLoc, geoError);


var imgDiv = document.getElementById('img-div');
var image = document.createElement('img');
if(navigator.geolocation) {
    image.src = "https://placekitten.com/200/300";
    imgDiv.appendChild(image);
}
else {
    image.src = "http://www.placepuppy.net/1p/400/250";
    imgDiv.appendChild(image);
}


document.getElementById('heading-1').style.backgroundColor = "steelblue";

var bd = document.getElementsByTagName('body')[0];

if(history.length) {
    bd.style.backgroundColor = "lightblue";
}
else {
    bd.style.backgroundColor = "orange";
}



for(var i=0; i<6; i++) {
    if(i/2 == 0) {
        document.getElementsByTagName('li')[i].style.backgroundColor = "yellow";
    }    
    if(i/2 != 0) {
        document.getElementsByTagName('li')[i++].style.backgroundColor = "red";
    }

}
