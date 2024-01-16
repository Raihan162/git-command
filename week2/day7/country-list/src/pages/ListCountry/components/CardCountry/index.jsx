import React from 'react'

import classes from './style.module.scss'

export default function Card({ onclick, borders, flags, languages, name, subRegion, tld, currency, country, population, region, capital }) {

  return (
    <>
      <div onClick={onclick} className={classes.card_container}>
        <img className={classes.flag} src={flags.png} alt="" />
        <div className={classes.info}>
          <h3>
            {name.common}
          </h3>
          <p>Population: <span>{parseInt(population).toLocaleString()}</span></p>
          <p>Region: <span>{region}</span></p>
          <p>Capital: <span>{capital}</span></p>
        </div>
      </div>
    </>
  )
}
