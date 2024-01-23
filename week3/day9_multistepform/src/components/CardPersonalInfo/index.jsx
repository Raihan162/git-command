import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setProfile } from '../../pages/Home/action'

import classes from './style.module.scss'

export default function CardPersonalInfo() {

  const dispatch = useDispatch()

  const profileState = useSelector((state) => state.homeReducer.profile)
  // console.log(profileState, '<<<<< COMPONENT INFO')

  const [personalInfo, setPersonalInfo] = useState({
    name: profileState.name,
    email: profileState.email,
    phone_number: profileState.phone_number,
    plan_type: profileState.plan_type,
    plan_price: profileState.plan_price,
    plan_yearly: profileState.plan_yearly,
    addOns: profileState.addOns,
    totalPrice: profileState.totalPrice
  })

  useEffect(() => {
    dispatch(setProfile(personalInfo))
  }, [personalInfo])

  return (
    <div className={classes.contentCard}>
      <h2>
        Personal Info
      </h2>
      <p>
        Please provide your name, email address, and phone number.
      </p>
      <div className={classes.inputs}>
        <label htmlFor="name" className={classes.label}>
          Name
        </label>
        <input value={personalInfo.name} onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })} className={classes.input} type="text" id='name' placeholder='e.g. Stephen King' />
      </div>
      <div className={classes.inputs}>
        <label htmlFor="emailAddress" className={classes.label}>
          Email Address
        </label>
        <input value={personalInfo.email} onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })} className={classes.input} type="email" id='emailAddress' placeholder='e.g. stephenking@lorem.com' />
      </div>
      <div className={classes.inputs}>
        <label htmlFor="phoneNumber" className={classes.label}>
          Phone Number
        </label>
        <input value={personalInfo.phone_number} onChange={(e) => setPersonalInfo({ ...personalInfo, phone_number: e.target.value })} className={classes.input} type="text" id='phoneNumber' placeholder='e.g. +1 234 567 890' />
      </div>
    </div>
  )
}
