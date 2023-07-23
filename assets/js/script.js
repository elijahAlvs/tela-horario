const hours = document.getElementById("hourHTML");
const minutes = document.getElementById("minHTML");
const seconds = document.getElementById("secHTML");

const time = setInterval(function timing(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    
    if(hr < 10){
        hr = '0' + hr;
    }
    if(min < 10) {
        min = '0' + min;
    }
    if(s < 10) {
        s = '0' + s;
    }


    document.getElementById('hourHTML').innerHTML = hr;
    document.getElementById('minHTML').innerHTML = min;
    document.getElementById('secHTML').innerHTML = s;
})