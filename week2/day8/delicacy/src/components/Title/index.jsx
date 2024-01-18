import React from 'react'

import classes from './style.module.scss'

export default function Title({ onClick }) {
  return (
    <div onClick={onClick} className={classes.container}>
      <h1>
        Delicacy
      </h1>
    </div>
  )
}
