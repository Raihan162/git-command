import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Plate from '../../assets/images/Plate.png'

import classes from './style.module.scss'
import ButtonRemoveFav from '../ButtonRemoveFav'

export default function CardMoreRecipies() {

    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)

    return (
        <div className={classes.container}>
            <img src={Plate} alt="" />
            <div className={classes.box}>
                <p>Beef Steak</p>
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
