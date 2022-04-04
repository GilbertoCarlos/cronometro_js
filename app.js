var mm = 0;
var ss = 0;
var hh = 0;

var startBtn = document.getElementById("start");
var pausartBtn = document.getElementById("pausar");
var stopBtn = document.getElementById("stop");

var tempo = 1000;
var cron=0;

function start(){
    timer()
    cron = setInterval(()=>{timer();}, tempo);

    startBtn.disabled = true;
    startBtn.style.color='black';

}



function pausar(){
    
    clearInterval(cron);
    startBtn.disabled = false;
}

function stop(){  
     
    clearInterval(cron);
    mm = 0;
    ss = 0;
    hh = 0;
    document.getElementById('timer').innerText = "00:00:00";
    startBtn.disabled = false;
}

function timer(){

    ss++
    if (ss == 60 ){
        ss=0;
        mm++;
        if(mm==60){
            mm=0;
            hh++;
        }
    }


    var format = (hh < 10 ? '0'+hh : hh) + ':' + (mm < 10 ? '0'+mm : mm) + ':' + (ss < 10 ? '0'+ss : ss);
    document.getElementById('timer').innerText = format;

}

