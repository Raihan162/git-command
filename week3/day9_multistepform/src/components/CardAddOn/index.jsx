import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setProfile } from '../../pages/Home/action'

import classes from './style.module.scss'

export default function CardAddOn() {

    const dispatch = useDispatch()

    const profileState = useSelector((state) => state.homeReducer.profile)

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

    // const [checked, setChecked] = useState(profileState.addOns)
    // console.log(checked)

    const addOns = [
        {
            type: 'Online Services',
            desc: 'Access to multiplayer games',
            priceMonthly: 1,
            priceYearly: 10
        },
        {
            type: 'Larger Storage',
            desc: 'Extra 1TB of cloud save',
            priceMonthly: 2,
            priceYearly: 20
        },
        {
            type: 'Customizable Profile',
            desc: 'Custom theme on your profile',
            priceMonthly: 2,
            priceYearly: 20
        },
    ]

    const handleChange = (event) => {
        let type = event.target.name.split(',')[0]
        let price = event.target.name.split(',')[1]

        let checkExist = personalInfo.addOns.find((data) => data.type === type)
        if (checkExist) {
            setPersonalInfo({
                ...personalInfo, addOns: personalInfo.addOns.filter((data) => data.type !== type)
            })
        } else {
            setPersonalInfo({ ...personalInfo, addOns: [...personalInfo.addOns, { type: type, price: parseInt(price) }] })
        }
    }

    useEffect(() => {
        dispatch(setProfile(personalInfo))
    }, [personalInfo])

    return (
        <div className={classes.contentCard}>
            <h2>
                Pick add-ons
            </h2>
            <p>
                Add ons help enhance your gaming experience.
            </p>
            {
                addOns?.map((item, index) => {
                    return (
                        <div key={index} className={classes.cardsPlan} style={{ borderColor: personalInfo.addOns.find((data) => data.type === item.type) ? 'hsl(243, 100%, 62%)' : null, backgroundColor: personalInfo.addOns.find((data) => data.type === item.type) ? 'hsl(216, 100%, 97%)' : null }}>
                            <div className={classes.contentPlan}>
                                <div className={classes.leftContent}>
                                    <input
                                        checked={personalInfo.addOns.find((data) => data.type === item.type) ? true : false} onChange={handleChange}
                                        type="checkbox"
                                        name={`${item.type},${personalInfo?.plan_yearly ? item.priceYearly : item.priceMonthly}`}
                                        id={item.type}
                                        className={classes.checkbox}
                                    />
                                    <div className={classes.planInfo}>
                                        <p className={classes.titleInfo}>
                                            {item.type}
                                        </p>
                                        <p className={classes.priceInfo}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                                <p className={classes.promo}>
                                    +${personalInfo?.plan_yearly ? item.priceYearly : item.priceMonthly}/{personalInfo.plan_yearly ? 'yr' : 'mo'}
                                </p>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}
