
const getClockTime = () => {
    let date = new Date();
    let time = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        ampm: "AM"
    }

    // Convert to 12-hour time
    if (time.hours === 12) {
        time.ampm = "PM";
    } else if (time.hours > 12) {
        time.ampm = "PM";
        time.hours -= 12;
    }

    // Make hours double digit by prepending 0
    if (time.hours < 10) {
        time.hours = "0" + time.hours;
    }
    
    // Make minutes double digit by prepending 0
    if (time.minutes < 10) {
        time.minutes = "0" + time.minutes;
    }
    
    // Make seconds double digit by prepending 0
    if (time.seconds < 10) {
        time.seconds = "0" + time.seconds;
    }
    
    return `${time.hours}:${time.minutes}:${time.seconds} ${time.ampm}`;
}

export default getClockTime;
