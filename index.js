import {convertTemp,apiCall} from "./usedFunctions/functions";

window.onload = function () {


    var btn = document.getElementById('w');
    var city = document.getElementById('city');

    btn.addEventListener('submit',function(ev){


        var xhr = apiCall(city.value)

        ev.preventDefault()
        // xhr.send();

    })




};