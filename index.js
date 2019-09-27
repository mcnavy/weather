window.onload = function () {


    var btn = document.getElementById('button');
    var city = document.getElementById('city');
    btn.onclick = function(ev){


        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=' + city.value +
            '&appid=b88ae6b1211078df478d7544a65d22f9', false);

        xhr.onreadystatechange = function(){
            if (xhr.readyState !==4 ){


                return;
            }
            if (xhr.status === 200){
                const response = JSON.parse(xhr.responseText);


                var temp = Math.round((response.main.temp-273)*10)/10,

                    wind_speed = response.wind.speed,
                    humidity = response.main.humidity,
                    clouds = response.clouds.all,
                    pressure = response.main.pressure;


                var template = document.getElementById('template').innerHTML;
                var compiled = _.template(template);
                var html = '';


                const data ={
                    city: city.value,
                    temprature: temp,
                    wind: wind_speed,
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


                alert('Error:'+JSON.parse(xhr.responseText).message);
            }
        };
        xhr.send();

    };




};