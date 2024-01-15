import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import FacebookLogo from '../../assets/images/icon-facebook.svg'
import PinterestLogo from '../../assets/images/icon-pinterest.svg'
import InstagramLogo from '../../assets/images/icon-instagram.svg'
import PatternHills from '../../assets/images/pattern-hills.svg';
import ShowCounter from './components/ShowCounter';

import classes from './style.module.scss';

let getTimeLeft = (date) => {
    let countdown = new Date(date)
    let totalTimeLeft = countdown - new Date()
    const day = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24))
    const hour = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24)
    const minute = Math.floor((totalTimeLeft / ((1000 * 60)) % 60))
    const second = Math.floor((totalTimeLeft / 1000) % 60)
    return { day, hour, minute, second }
}

function Home() {

    const [searchParams, setSearchParams] = useSearchParams();
    const myParam = searchParams.get('date') ? searchParams.get('date') : '2024-01-24 17:00:00';

    const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(myParam))


    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft(myParam))
        }, 1000);

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div className={classes.bgColor}>
            <div className={classes.bgStars}>
                <img className={classes.bgHills} src={PatternHills} alt="" />
                <div className={classes.countdown}>
                    <h1>
                        WE'RE LAUNCHING SOON
                    </h1>

                    {
                        timeLeft.day === 0 && timeLeft.hour === 0 && timeLeft.minute === 0 && timeLeft.second === 0 ?
                            <p>CountDown sudah habis</p>
                            :
                            <ShowCounter days={timeLeft.day} hours={timeLeft.hour} minutes={timeLeft.minute} seconds={timeLeft.second} />
                    }
                </div>

                <div className={classes.socialmedia}>
                    <img src={FacebookLogo} alt="Facebook Logo" />
                    <img src={PinterestLogo} alt="Pinterest Logo" />
                    <img src={InstagramLogo} alt="Instagram Logo" />
                </div>

            </div>
        </div>
    )
}

export default Home