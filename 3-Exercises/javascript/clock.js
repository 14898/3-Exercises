window.onload = datum();
window.onload = time();

function datum()
{
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let today = day + "." + month + "." + year;

    document.getElementById("date").innerText = today
}

function time()
{
    let date = new Date(); 
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    seconds = checkTime(seconds);
    minutes = checkTime(minutes);
      
    let time = hours + ":" + minutes + ":" + seconds;
  
    document.getElementById("time").innerText = time;
    updateTime();
}

function updateTime()
{
    setTimeout(time, 1000);
}

function checkTime(time)
{
    if(time < 10)
    {
        time = "0" + time;
    }
    return time;
}