import React from 'react'

import classes from './style.module.scss'

export default function ButtonRemoveFav({func}) {
    return (
        <button onClick={func}>
            Remove from favorites
        </button>
    )
}
