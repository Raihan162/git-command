import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import classes from './style.module.scss'
import { setProfile } from '../../pages/Home/action'

export default function CardFinishing() {

    const profileState = useSelector((state) => state.homeReducer.profile)

    const dispatch = useDispatch()

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

    // console.log(personalInfo.totalPrice)

    useEffect(() => {
        dispatch(setProfile(personalInfo))
    }, [personalInfo])

    useEffect(() => {
        countTotalPrice()
    }, [])

    const countTotalPrice = () => {
        let totPrice = 0
        personalInfo?.addOns.forEach(data =>
            totPrice += data.price
        )

        setPersonalInfo({ ...personalInfo, totalPrice: totPrice += personalInfo?.plan_price })
    }

    return (
        <div className={classes.contentCard}>
            <h2>
                Finishing up
            </h2>
            <p>
                Double-check everything looks OK before confirming.
            </p>
            <div className={classes.overview}>
                <div className={classes.contentOverview}>
                    <div className={classes.overviewPlan}>
                        <div className={classes.left}>
                            <p>{personalInfo?.plan_type} ({personalInfo?.plan_yearly ? 'Yearly' : 'Monthly'})</p>
                            <button>
                                Change
                            </button>
                        </div>
                        <div className={classes.right}>
                            <p>
                                ${personalInfo?.plan_price}/{personalInfo?.plan_yearly ? 'yr' : 'mo'}
                            </p>
                        </div>
                    </div>
                    {
                        personalInfo?.addOns.map((data, index) => {
                            return (
                                <div key={index} className={classes.overviewAddOn}>
                                    <div className={classes.left}>
                                        <p>{data?.type}</p>
                                    </div>
                                    <div className={classes.right}>
                                        <p>
                                            +${data?.price}/{personalInfo?.plan_yearly ? 'yr' : 'mo'}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={classes.overviewTotal}>
                    <div className={classes.left}>
                        <p>Total (per {personalInfo?.plan_yearly ? 'year' : 'month'})</p>
                    </div>
                    <div className={classes.right}>
                        <p>
                            +${personalInfo.totalPrice}/{personalInfo?.plan_yearly ? 'yr' : 'mo'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
