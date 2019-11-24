export function apiCall(cityName) {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=' +cityName+
        '&appid=b88ae6b1211078df478d7544a65d22f9', false);

    xhr.setRequestHeader('X-Requested-With', 'XML');

    return xhr

}
export function convertTemp(temp) {
    return Math.round((temp-273)*10)/10

}
export function getCorrectData(xhr) {
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


    return response;
}

export function getErrorData(xhr) {

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



    //alert('Error:'+JSON.parse(xhr.responseText).message);
    return xhr.status;
}
