import React from 'react'

import ButtonRemoveFav from '../../../../components/ButtonRemoveFav'
import Foto from '../../../../assets/images/plate.png'

import classes from './style.module.scss'

export default function CardFavorite({ data , func}) {

    console.log(data)
    return (
        <div value={data?.id} className={classes.container}>
            <img src={data?.image} alt="" />
            <div className={classes.box}>
                <p>{data?.Meal}</p>
                <ButtonRemoveFav  func={func}/>
            </div>
        </div>
    )
}
