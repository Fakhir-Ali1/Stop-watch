var milisecond = 0;
var second = 0;
var minutes = 0;
var gmili = document.getElementById("mili")
var gsec = document.getElementById("sec")
var gmin = document.getElementById("min")
var mainwatch;


function start(){mainwatch =
setInterval(function(){ milisecond++
    gmili.innerHTML = milisecond
    if(milisecond >= 100){second++
        gsec.innerHTML=second
        milisecond=0
    }
else if( second >= 60){
    minutes++
    gmin.innerHTML=minutes
    second=0
}
},10)
document.getElementById("str").disabled = true
}


function rest(){
    milisecond = 0
    gmili.innerHTML =milisecond
    second = 0
    gsec.innerHTML= second
    minutes = 0
    gmin.innerHTML=minutes
}


function stop(){
    clearInterval(mainwatch)
    document.getElementById("str").disabled = false
}