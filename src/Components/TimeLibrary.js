
const getCurrentTime = () => new Date()

export const toHoursMinutesSeconds = time =>
    ({
        hours: time.getHours(),
        minutes: time.getMinutes(),
        seconds: time.getSeconds()
    })

export const civilianHours = clockTime =>
    ({
        ...clockTime,
        hours: (clockTime.hours > 12) ?  clockTime.hours - 12 : clockTime.hours
    })

export const appendAMPM = clockTime =>
    ({
        ...clockTime,
        ampm: (clockTime.hours >= 12) ? "pm" : "am"
    })

export const padWithZero = key => clockTime =>
    ({
        ...clockTime,
        [key]: (clockTime[key] < 10) ? "0" + clockTime[key] : clockTime[key]
    })

export const compose = (...fns) => (arg) => fns.reduce((composed, f) => f(composed), arg)

export const convertToCivilianTime = clockTime =>
    compose(
        appendAMPM,
        civilianHours
    )(clockTime)

export const padHoursMinutesSeconds = civilianTime =>
    compose(
        padWithZero("hours"),
        padWithZero("minutes"),
        padWithZero("seconds")
    )(civilianTime)

export const getClockTime = compose(
    getCurrentTime,
    toHoursMinutesSeconds,
    convertToCivilianTime,
    appendAMPM,
    padHoursMinutesSeconds
)
