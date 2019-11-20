import {convertTemp,apiCall} from "./usedFunctions/functions";

window.onload = function () {


    var btn = document.getElementById('w');
    var city = document.getElementById('city');

    btn.addEventListener('submit',function(ev){


        var xhr = apiCall(city.value)

        xhr.onreadystatechange = function(){
            if (xhr.readyState !==4 ){


                return;
            }
            if (xhr.status === 200){
                var response = JSON.parse(xhr.responseText);


                var temp = convertTemp(response.main.temp),//Math.round((response.main.temp-273)*10)/10,

                    windSpeed = response.wind.speed,
                    humidity = response.main.humidity,
                    clouds = response.clouds.all,
                    pressure = response.main.pressure;


                var template = document.getElementById('template').innerHTML;
                var compiled = _.template(template);
                var html = '';


                var data ={
                    city: city.value,
                    temprature: temp,
                    wind: windSpeed,
                    clouds: clouds,
                    pressure: pressure,
                    humidity: humidity
                };

                html+= compiled(data);
                ins.innerHTML = '';
                ins.insertAdjacentHTML("beforeend",html);
                ev.preventDefault();
            }
            else{
                var template = document.getElementById('errorTemplate').innerHTML;
                var compiled = _.template(template);
                var html = '';
                var error = JSON.parse(xhr.responseText).message;
                var data = {
                    error:error
                };
                html+= compiled(data);
                ins.innerHTML = '';
                ins.insertAdjacentHTML("beforeend",html);
                ev.preventDefault();


                //alert('Error:'+JSON.parse(xhr.responseText).message);
            }
        };
        xhr.send();

    })




};