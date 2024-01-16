import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import Navbar from '../../components/Navbar';

import classes from './style.module.scss'

export default function DetailCountry() {

    const navigate = useNavigate()

    const location = useLocation()
    const { data } = location?.state

    const [mode, setMode] = useState(false)

    const backToList = () => {
        navigate('/')
    }

    return (
        <div className={classes.container} style={{ backgroundColor: mode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)", color: mode ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)" }}>
            <div className={classes.navbar} style={{ backgroundColor: mode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)", color: mode ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)" }}>
                <h1>
                    Where in the world?
                </h1>
                <button onClick={() => {
                    setMode(!mode);
                }} style={{ color: mode ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)" }}>
                    {
                        mode ?
                            <LightModeIcon />
                            :
                            <DarkModeIcon />
                    }
                    {
                        mode ?
                            'Light Mode'
                            :
                            'Dark Mode'
                    }
                    {/* Dark Mode */}
                </button>
            </div>

            <button onClick={() => backToList()} className={classes.back}>
                <KeyboardBackspaceIcon />
                Back
            </button>

            <div className={classes.flagInfo}>
                <img className={classes.flag} src={data?.flags?.png} alt={`Flags ${data?.name.common}`} />
                <div className={classes.info}>
                    <h3>
                        {data?.name.common || '-'}
                    </h3>
                    <div className={classes.infoDetail}>
                        <div className={classes.topInfo}>
                            <p>Native Name: {Object.values(data?.name.nativeName)[0]?.official || '-'}</p>
                            <p>Population: {data?.population.toLocaleString() || '-'}</p>
                            <p>Region: {data?.region || '-'}</p>
                            <p>Sub Region: {data?.subRegion || '-'}</p>
                            <p>Capital: {data?.capital[0] || '-'}</p>
                        </div>
                        <div className={classes.bottomInfo}>
                            <p>Top Level Domain: {data?.tld[0]}</p>
                            <p>Currencies: {Object.values(data?.currency)[0]?.name}</p>
                            <p>Languages: {Object.values(data?.languages)?.join(',')}</p>
                        </div>
                    </div>
                    <div className={classes.border}>
                        <p>Border Countries:</p>
                        <div className={classes.countryBorder}>
                            {data?.borders?.map((value, index) => {
                                return (
                                    <p key={index}>{value}</p>
                                )
                            }) || <p>None</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
