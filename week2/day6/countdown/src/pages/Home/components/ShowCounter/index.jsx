import React from 'react'

import classes from './style.module.scss'

export default function ShowCounter({ days, hours, minutes, seconds }) {
    return (
        <div className={classes.showCounter}>
            <div className={classes.containerTime}>
                <div className={classes.card}>
                    <div className={classes.time}>
                        {days < 10 && days >= 0 ? `0${days}` : days >= 10 ? days : '00'}
                    </div>
                    <div className={classes.top}></div>
                    <div className={classes.bottom}></div>
                </div>
                <p>
                    DAYS
                </p>
            </div>
            <div className={classes.containerTime}>
                <div className={classes.card}>
                    <div className={classes.time}>
                        {hours < 10 && hours >= 0 ? `0${hours}` : hours >= 10 ? hours : '00'}
                    </div>
                    <div className={classes.top}></div>
                    <div className={classes.bottom}></div>
                </div>
                <p>
                    HOURS
                </p>
            </div>
            <div className={classes.containerTime}>
                <div className={classes.card}>
                    <div className={classes.time}>
                        {minutes < 10 && minutes >= 0 ? `0${minutes}` : minutes >= 10 ? minutes : '00'}
                    </div>
                    <div className={classes.top}></div>
                    <div className={classes.bottom}></div>
                </div>
                <p>
                    MINUTES
                </p>
            </div>
            <div className={classes.containerTime}>
                <div className={classes.card}>
                    <div className={classes.time}>
                        {seconds < 10 && seconds >= 0 ? `0${seconds}` : seconds >= 10 ? seconds : '00'}
                    </div>
                    <div className={classes.top}></div>
                    <div className={classes.bottom}></div>
                </div>
                <p>
                    SECONDS
                </p>
            </div>
        </div >
    )
}
