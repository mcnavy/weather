import {apiCall, getCorrectData, getErrorData} from "./usedFunctions/functions";

window.onload = function () {


    var btn = document.getElementById('w');
    var city = document.getElementById('city');

    btn.addEventListener('submit',function(ev){

        var xhr = apiCall(city.value)
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    getCorrectData(xhr);
                } else {
                    getErrorData(xhr);
                }
            }

        };
        xhr.send();
        ev.preventDefault()


    })




};