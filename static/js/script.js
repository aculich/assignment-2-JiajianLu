var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var r = JSON.parse(this.responseText);
        document.getElementById('city').innerHTML = r.name;
        document.getElementById('temp').innerHTML = r.main.temp +"<sup>°</sup>";
        //console.log();
        document.getElementById('clouds').innerHTML = r.weather[0].description;
        var winddir = r.wind.deg;
        if(winddir < 90){
        	winddir = "NE";
        }
        else if(winddir < 180){
        	winddir = "SE";
        }
        else if(winddir < 270){
        	winddir = "SW";
        }
        else{
        	winddir = "NW";
        }
        document.getElementById('winds').innerHTML = "Winds "+winddir+" at "+r.wind.speed + " mph";
        //document.getElementById('humidity').innerHTML = r.main.humidity;
		//document.getElementById('temp_min').innerHTML = r.main.temp_min +"<sup>°</sup>";
		//document.getElementById('temp_max').innerHTML = r.main.temp_max +"<sup>°</sup>";
    }
};
request.open("GET", "http://api.openweathermap.org/data/2.5/weather?id=5327684&units=imperial&APPID=e29e5b7074c8d3b01829e956439f5e6f", true)
request.send();
//console.log();