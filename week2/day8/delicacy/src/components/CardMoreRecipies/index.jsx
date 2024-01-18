import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Plate from '../../assets/images/Plate.png'
import ButtonRemoveFav from '../ButtonRemoveFav'

import classes from './style.module.scss'

export default function CardMoreRecipies({ data }) {

    const location = useLocation()
    const navigate = useNavigate()

    return (
        <div className={classes.container}>
            <img src={data?.strMealThumb} alt="" />
            <div className={classes.box}>
                <p>{data?.strMeal}</p>
                {
                    location?.pathname === '/favorite' ?
                        <ButtonRemoveFav />
                        :
                        null
                }
            </div>
        </div>
    )
}
