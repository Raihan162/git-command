import React from 'react'

import CardMoreRecipies from '../CardMoreRecipies'

import classes from './style.module.scss'

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
