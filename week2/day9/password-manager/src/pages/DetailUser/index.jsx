import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import classes from './style.module.scss'

export default function DetailUser() {

  const location = useLocation()
  const navigate = useNavigate()

  const toDashboard = () =>{
    navigate('/')
  }

  return (
    <div className={classes.container}>
      <button onClick={()=>toDashboard()} className={classes.back}>
        <ArrowBackIcon />
        <p>Back</p>
      </button>
      <div className={classes.detailUser}>
        <table>
          <tr>
            <th>Provider</th>
            <td>{location?.state.data.provider}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{location?.state.data.email}</td>
          </tr>
          <tr>
            <th>Password</th>
            <td>{location?.state.data.password}</td>
          </tr>
          <tr>
            <th>Category</th>
            <td>{location?.state.data.category}</td>
          </tr>
        </table>
      </div>
    </div>
  )
}
