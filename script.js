var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;


function start(){
    timer = true;
    stopWatch();
}

function stop(){
    timer = false;
}

function reset(){

    timer = false;

    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    //document.getElementById('Count').innerHTML = "00";
    document.getElementById('Sec').innerHTML = "00";
    document.getElementById('Min').innerHTML = "00";
    document.getElementById('Hr').innerHTML = "00";

}

function stopWatch(){

    if(timer == true){

        count = count + 1;

        if(count == 100){
            sec = sec + 1;
            count = 0;
        }

        if(sec == 60){
            min = min + 1;
            sec = 0;
        }

        if(min == 60){
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        var h = hr;
        var m = min;
        var s = sec;
        var c = count;

        if(hr < 10){
            h = "0" + h;
        }

        if(min < 10){
            m = "0" + m;
        }

        if(sec < 10){
            s = "0" + s;
        }

        if(count < 10){
            c = "0" + c;
        }

        //document.getElementById('Count').innerHTML = c;
        document.getElementById('Sec').innerHTML = s;
        document.getElementById('Min').innerHTML = m;
        document.getElementById('Hr').innerHTML = h;

        setTimeout( "stopWatch()", 10);

    }

}