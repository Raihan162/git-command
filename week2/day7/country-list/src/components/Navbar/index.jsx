import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import classes from './style.module.scss'

export default function Navbar() {
    return (
        <div className={classes.navbar}>
            <h1>
                Where in the world?
            </h1>
            <button>
                <DarkModeIcon />
                Dark Mode
            </button>
        </div>
    )
}
