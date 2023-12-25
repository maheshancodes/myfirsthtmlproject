console.log("Hello from UiA");

window.onload = function(){
    var timeleft1 = document.getElementById('test1_interval').value * 60;
    var downloadTimer1 = setInterval(function(){
    if(timeleft1 <= 0){
        clearInterval(downloadTimer1);
            document.getElementById('test1').innerHTML = "Finished";
        } else {
            let minutes = ~~(timeleft1 / 60);
            let extraSeconds = timeleft1 % 60;
            document.getElementById('test1').innerHTML = minutes +":"+ extraSeconds;
         }
        timeleft1 -= 1;
        }, 1000);

        var timeleft2 = document.getElementById('test2_interval').value * 60;
        var downloadTimer2 = setInterval(function(){
        if(timeleft2 <= 0){
        clearInterval(downloadTimer2);
            document.getElementById('test2').innerHTML = "Finished";
        } else {
            let minutes2 = ~~(timeleft2 / 60);
            let extraSeconds2 = timeleft2 % 60;
            document.getElementById('test2').innerHTML = minutes2 +":"+ extraSeconds2;
         }
        timeleft2 -= 1;
        }, 1000);
    
    
}



