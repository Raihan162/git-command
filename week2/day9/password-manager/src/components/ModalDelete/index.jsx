import React from 'react'

import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import classes from './style.module.scss'

export default function ModalDelete({ data, func }) {

  return (
    <div className={classes.container}>
      <div className={classes.modal}>
        <div className={classes.title}>
          <HighlightOffIcon className={classes.icon} />
          <h3>
            Are you sure?
          </h3>
        </div>
        <div className={classes.buttons}>
          <button onClick={() => func.deleteUser()} className={classes.yes}>
            Yes
          </button>
          <button onClick={() => data.setShowModalDelete(false)} className={classes.cancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
