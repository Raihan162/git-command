import React from 'react'

import classes from './style.module.scss'

export default function NavButton() {
    return (
        <div className={classes.navButton}>
            <div className={classes.buttons}>
                <button className={classes.back}>
                    Go back
                </button>

                <button className={classes.next}>
                    Next Step
                </button>
            </div>
        </div>
    )
}
