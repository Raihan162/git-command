import React from 'react'

import classes from './style.module.scss'
import CardMoreRecipies from '../CardMoreRecipies'

export default function MoreRecipies() {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <h3>
                    More Recipies
                </h3>
            </div>
            <div className={classes.listRecipies}>
                <CardMoreRecipies />
                <CardMoreRecipies />
                <CardMoreRecipies />
                <CardMoreRecipies />
                <CardMoreRecipies />
                <CardMoreRecipies />
            </div>
        </div>
    )
}
