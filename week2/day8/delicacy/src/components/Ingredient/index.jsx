import React from 'react'

import OliveOil from '../../assets/images/olive-oil.svg'

import classes from './style.module.scss'

export default function Ingredient() {
    return (
        <div className={classes.ingredient}>
            <div className={classes.cardImage}>
                <img src={OliveOil} alt="Olive Oil" />
            </div>
            <div className={classes.desc}>
                <p className={classes.name}>
                    Fennel
                </p>
                <p className={classes.dose}>
                    2 Medium
                </p>
            </div>
        </div>
    )
}
