let nextYear = 0;

function countdown() {
    const currentDate = new Date();
    if (nextYear === 0 || currentDate.getFullYear() >= nextYear) {
        nextYear = currentDate.getFullYear() + 1;
    }
    
    const newYearDate = new Date("1 Jan "+nextYear);
    const totalSeconds = (newYearDate.getTime() - currentDate.getTime())/1000;
    const days = formatTime(Math.floor(totalSeconds/3600/24 ));
    const hours = formatTime(Math.floor(totalSeconds/3600) % 24);
    const minutes = formatTime(Math.floor(totalSeconds/60) % 60);
    const seconds = formatTime(Math.floor(totalSeconds) % 60);

    document.getElementById("days-value").innerHTML = days;
    document.getElementById("hours-value").innerHTML = hours;
    document.getElementById("minutes-value").innerHTML = minutes;
    document.getElementById("seconds-value").innerHTML = seconds;
}

function formatTime(time) {
    return time < 10 ? '0'+time : time;
}

setInterval(countdown, 1000);