import React from 'react'

import ThankYou from '../../assets/images/icon-thank-you.svg'

import classes from './style.module.scss'

export default function CardThankYou() {
    return (
        <div className={classes.contentCard}>
            <img src={ThankYou} alt="Icon Thank You" />
            <h2>
                Thank you!
            </h2>
            <p>
                Thanks for confimring your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com
            </p>
        </div>
    )
}
