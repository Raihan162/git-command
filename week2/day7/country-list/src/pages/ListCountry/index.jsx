import React, { useState, useEffect } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CssBaseline } from '@mui/material';
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { useColorScheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { callAPI } from '../../domain/api';

import Navbar from '../../components/Navbar';
import Card from './components/CardCountry'
import customTheme from '../../themes/custom-themes';

import SearchLogo from '../../assets/images/search-logo.svg'

import classes from './style.module.scss'


export default function ListCountry() {

    const navigate = useNavigate()
    const [listCountry, setListCountry] = useState(null)
    const [listCoutryFixed, setListCountryFixed] = useState(null)
    const [country, setCountry] = useState('')
    const [regions, setRegions] = useState('')

    const [mode, setMode] = useState(false)

    const region = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

    const getData = async () => {
        try {
            const response = await callAPI('/all', 'GET');
            const modifiedResponse = response?.map((item) => {
                return {
                    borders: item.borders,
                    capital: item.capital,
                    flags: item.flags,
                    languages: item.languages,
                    name: item.name,
                    population: item.population,
                    region: item.region,
                    subRegion: item.subregion,
                    tld: item.tld,
                    currency: item.currencies
                }
            })
            setListCountry(modifiedResponse.slice(0, 20))
            setListCountryFixed(modifiedResponse.slice(0, 20))
        } catch (error) {
            console.log(error)
        }
    }

    const searchData = async (keyPressed) => {
        try {
            if (keyPressed === "Enter" && country.length !== 0) {
                const response = await callAPI(`/name/${country}`)
                const modifiedResponse = response?.map((item) => {
                    return {
                        borders: item.borders,
                        capital: item.capital,
                        flags: item.flags,
                        languages: item.languages,
                        name: item.name,
                        population: item.population,
                        region: item.region,
                        subRegion: item.subregion,
                        tld: item.tld,
                        currency: item.currencies
                    }
                })
                setListCountry(modifiedResponse)
            } else {
                const response = await callAPI('/all', 'GET');
                const modifiedResponse = response?.map((item) => {
                    return {
                        borders: item.borders,
                        capital: item.capital,
                        flags: item.flags,
                        languages: item.languages,
                        name: item.name,
                        population: item.population,
                        region: item.region,
                        subRegion: item.subregion,
                        tld: item.tld,
                        currency: item.currencies
                    }
                })
                setListCountry(modifiedResponse.slice(0, 20))
            }
        } catch (error) {
            console.log(error)
        }
    }

    const filterByRegion = async (region) => {
        try {
            console.log(region)
            setListCountry(listCoutryFixed)
            if (region) {
                if (region === 'all') {
                    setListCountry(listCoutryFixed)
                } else {
                    let tempArr = []
                    for (let i = 0; i < listCountry.length; i++) {
                        if (listCountry[i].region === region) {
                            tempArr = [...tempArr, listCountry[i]];
                            // tempArr.push(listCountry[i])
                        }
                    }
                    console.log(tempArr)
                    if (tempArr.length !== 0)
                        return setListCountry(tempArr)
                }

            } else {
                null
            }
        } catch (error) {
            console.log(error)
        }
    }

    const detailCountry = (data) => {
        navigate('/detail-country', { state: { data } })
    }

    // const { mode, setMode } = useColorScheme();

    useEffect(() => {
        getData()
    }, [])


    return (
        <CssVarsProvider theme={customTheme}>
            <CssBaseline />
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
                <div className={classes.searchFilter}>
                    <div className={classes.search} style={{ backgroundColor: mode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)", color: mode ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)" }}>
                        <img src={SearchLogo} alt="Search Logo" />
                        <input onKeyDownCapture={(e) => searchData(e.key)} onChange={(e) => setCountry(e.target.value)} type="text" placeholder='Search for a country...' style={{ backgroundColor: mode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)", color: mode ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)" }} />
                    </div>
                    {/* <button className={classes.filter}> */}
                    <select onClick={(e) => filterByRegion(e.target.value)} className={classes.filter} name="filter" id="filter" style={{ backgroundColor: mode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)", color: mode ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)" }}>
                        <option value="" hidden>Filter by Region</option>
                        <option value="all">All</option>
                        {
                            region?.map((value, index) => {
                                return (
                                    <option key={index} value={value}>{value}</option>
                                )
                            })
                        }
                    </select>

                </div>
                <div className={classes.list}>
                    {
                        listCountry?.map((value, index) => {
                            return (
                                <Card key={index} onclick={() => detailCountry(value)} borders={value?.borders} capital={value?.capital} flags={value?.flags} languages={value?.languages} name={value?.name} population={value?.population} region={value?.region} subRegion={value?.subRegion} tld={value?.tld} currency={value?.currencies} />
                            )
                        })
                    }
                </div>
            </div >
        </CssVarsProvider>
    )
}
