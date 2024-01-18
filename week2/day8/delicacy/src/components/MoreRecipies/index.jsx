import React from 'react'

import CardMoreRecipies from '../CardMoreRecipies'

import classes from './style.module.scss'

export default function MoreRecipies({ data }) {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <h3>
                    More Recipies
                </h3>
            </div>
            <div className={classes.listRecipies}>
                {
                    data?.randomRec.map((value, index) => {
                        return (
                            <CardMoreRecipies key={index} data={value} />
                        )
                    })
                }
            </div>
        </div>
    )
}
