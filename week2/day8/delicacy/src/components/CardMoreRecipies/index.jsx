import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Plate from '../../assets/images/Plate.png'
import ButtonRemoveFav from '../ButtonRemoveFav'

import classes from './style.module.scss'

export default function CardMoreRecipies() {

    const location = useLocation()
    const navigate = useNavigate()

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
