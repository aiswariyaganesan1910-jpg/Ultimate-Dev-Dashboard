const timer=document.getElementById("timer-display")
var minutes=25;
var seconds=0;
var strbtn=document.getElementById("start-btn")
var paubtn=document.getElementById("pause-btn")
var rebtn=document.getElementById("reset-btn")
var resbtn=document.getElementById("resume-btn")
let interval=null;
strbtn.onclick=function()
{
    if(interval!==null)return;
    interval=setInterval(function(){
    if(seconds===0)
    {
        if(minutes===0)
        {
            clearInterval(interval);
            interval=null;
            return;
        }
        minutes--;
        seconds=59;
    }
    else{
        seconds--;
    }
    timer.textContent=`${minutes}:${seconds.toString().padStart(2,"0")}`
},1000);};
paubtn.onclick=function()
{
    if(interval !==null)
    {
        clearInterval(interval);
        interval=null;
    }
}
resbtn.onclick=function()
{
   if(interval!==null)return;
    interval=setInterval(function(){
    if(seconds===0)
    {
        if(minutes===0)
        {
            clearInterval(interval);
            interval=null;
            return;
        }
        minutes--;
        seconds=59;
    }
    else{
        seconds--;
    }
    timer.textContent=`${minutes}:${seconds.toString().padStart(2,"0")}`
},1000);
};
rebtn.onclick=function()
{
    clearInterval(interval);
    interval=null;
    minutes=25;
    seconds=0;
    timer.textContent="25:00";
};
