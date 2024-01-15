import React from 'react'

import classes from './style.module.scss'

export default function ShowCounter({ days, hours, minutes, seconds }) {
    return (
        <div className={classes.showCounter}>
            <div className={classes.days}>
                <div className={classes.daysTime}>
                    {days < 10 && days >= 0 ? `0${days}` : days >= 10 ? days : '00'}
                </div>
                <p>
                    DAYS
                </p>
            </div>
            <div className={classes.hours}>
                <div className={classes.hoursTime}>
                    {hours < 10 && hours >= 0 ? `0${hours}` : hours >= 10 ? hours : '00'}
                    {/* {hours < 10 ? `0${hours}` : hours || '00'} */}
                </div>
                <p>
                    HOURS
                </p>
            </div>
            <div className={classes.minutes}>
                <div className={classes.minutesTime}>
                    {minutes < 10 && minutes >= 0 ? `0${minutes}` : minutes >= 10 ? minutes : '00'}
                </div>
                <p>
                    MINUTES
                </p>
            </div>
            <div className={classes.seconds}>
                <div className={classes.secondsTime}>
                    {seconds < 10 && seconds >= 0 ? `0${seconds}` : seconds >= 10 ? seconds : '00'}
                </div>
                <p>
                    SECONDS
                </p>
            </div>
        </div>
    )
}
