export function apiCall(cityName) {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=' +cityName+
        '&appid=b88ae6b1211078df478d7544a65d22f9', false);

    return xhr

}
export function convertTemp(temp) {
    return Math.round((temp-273)*10)/10

}

