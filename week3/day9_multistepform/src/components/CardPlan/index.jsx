import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';

import Arcade from '../../assets/images/icon-arcade.svg'
import Advance from '../../assets/images/icon-advanced.svg'
import Pro from '../../assets/images/icon-pro.svg'

import classes from './style.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setProfile } from '../../pages/Home/action';

export default function CardPlan() {

    const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
        '&:active': {
            '& .MuiSwitch-thumb': {
                width: 15,
            },
            '& .MuiSwitch-switchBase.Mui-checked': {
                transform: 'translateX(9px)',
            },
        },
        '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
                transform: 'translateX(12px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: 'hsl(213, 96%, 18%)',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 12,
            height: 12,
            borderRadius: 6,
            transition: theme.transitions.create(['width'], {
                duration: 200,
            }),
        },
        '& .MuiSwitch-track': {
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor:
                'hsl(213, 96%, 18%)',
            boxSizing: 'border-box',
        },
    }));

    const dispatch = useDispatch()

    const plans = [
        {
            type: 'Arcade',
            priceMonthly: 9,
            priceYearly: 90,
            icon: Arcade
        },
        {
            type: 'Advance',
            priceMonthly: 12,
            priceYearly: 120,
            icon: Advance
        },
        {
            type: 'Pro',
            priceMonthly: 15,
            priceYearly: 150,
            icon: Pro
        }
    ]

    const profileState = useSelector((state) => state.homeReducer.profile)
    // console.log(profileState, '<<<<< COMPONENT PLAN')

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

    const planHandler = (data) => {
        setPersonalInfo({
            ...personalInfo,
            plan_type: data.split(',')[0],
            plan_price: parseInt(data.split(',')[1]),
            addOns: []
        })
    }

    const switchMonthly = (checked) => {
        setPersonalInfo({
            ...personalInfo,
            plan_type: "",
            plan_price: 0,
            plan_yearly: checked.target.checked,
            addOns: [],
        })
    }

    useEffect(() => {
        dispatch(setProfile(personalInfo))
    }, [personalInfo])


    return (
        <div className={classes.contentCard}>
            <h2>
                Select your plan
            </h2>
            <p>
                You have the option of monthly or yearly billing.
            </p>
            <div className={classes.plans}>
                {
                    plans?.map((item, index) => {
                        return (
                            <div className={classes.cardsPlan} key={index} style={{ borderColor: personalInfo.plan_type === item.type ? 'hsl(243, 100%, 62%)' : null, backgroundColor: personalInfo.plan_type === item.type ? 'hsl(216, 100%, 97%)' : null }}>
                                <div onClick={() => planHandler(`${item.type},${personalInfo?.plan_yearly ? item.priceYearly : item.priceMonthly}`)} className={classes.contentPlan}>
                                    <img src={item.icon} alt="Arcade Icon" />
                                    <div className={classes.planInfo}>
                                        <p className={classes.titleInfo}>
                                            {item.type}
                                        </p>
                                        <p className={classes.priceInfo}>
                                            ${personalInfo?.plan_yearly ? item.priceYearly : item.priceMonthly}/mo
                                        </p>
                                        {
                                            personalInfo?.plan_yearly ?
                                                <p className={classes.promo}>
                                                    2 months free
                                                </p>
                                                :
                                                null
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className={classes.switch}>
                <Stack direction="row" spacing={1} alignItems="center">
                    <p>Monthly</p>
                    <AntSwitch
                        checked={personalInfo?.plan_yearly}
                        onChange={switchMonthly}
                        inputProps={{ 'aria-label': 'ant design' }}
                    />
                    <p>Yearly</p>
                </Stack>
            </div>
        </div>
    )
}
