import React from 'react'

import classes from './style.module.scss'

export default function ButtonFav({ onClick, checkPathname, addToFavorite}) {
  return (
    <button onClick={addToFavorite} style={{ justifyContent: checkPathname ? "center" : null }}>
      Add to favorites
    </button>
  )
}
