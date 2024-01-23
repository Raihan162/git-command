import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setProfile, setStep } from './action'

import Bg from '../../assets/images/bg-sidebar-mobile.svg'
import BgWeb from '../../assets/images/bg-sidebar-desktop.svg'

import CardPersonalInfo from '../../components/CardPersonalInfo'
import CardPlan from '../../components/CardPlan'
import CardAddOn from '../../components/CardAddOn'
import CardFinishing from '../../components/CardFinishing'
import CardThankYou from '../../components/CardThankYou'
import NavButton from '../../components/NavButton'

import classes from './style.module.scss'

export default function Home() {

    const dispatch = useDispatch()

    const currentStep = useSelector((state) => state.homeReducer.step)

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

    const renderedComponent = () => {
        switch (currentStep) {
            case 1:
                return <CardPersonalInfo />
            case 2:
                return <CardPlan />
            case 3:
                return <CardAddOn />
            case 4:
                return <CardFinishing />
            case 5:
                return <CardThankYou />
            default:
                break;
        }
    }

    const handlerComponent = (data) => {
        if (currentStep === 5) {
            dispatch(setStep(1))
            setPersonalInfo({
                name: "",
                email: "",
                phone_number: "",
                plan_type: "Arcade",
                plan_price: 9,
                plan_yearly: false,
                addOns: [],
                totalPrice: 0
            })
            dispatch(setProfile(personalInfo))
        } else {
            if (data === '+') {
                if (!profileState.name || !profileState.email || !profileState.phone_number) {
                    alert('Please fill all data')
                } else {
                    if (!profileState.email.includes('@') || !profileState.email.includes('.co')) {
                        alert('Invalid email format')
                    } else {
                        dispatch(setStep(currentStep + 1))
                    }
                }
            } else if (data === '-') {
                dispatch(setStep(currentStep - 1))
            }
        }
    }

    return (
        <>
            <div className={classes.container}>
                <div className={classes.content}>
                    <div className={classes.sidebar}>
                        <img src={Bg} alt="Background Sidebar" className={classes.bgSidebar} />
                        <img src={BgWeb} alt="Background Sidebar" className={classes.bgSidebarWeb} />
                        <div className={classes.number}>
                            <div className={classes.info}>
                                <p className={currentStep === 1 ? classes.numberStepActive : classes.numberStep}>1</p>
                                <div className={classes.titleStepContainer}>
                                    <p className={classes.step}>STEP 1</p>
                                    <p className={classes.titleStep}>YOUR INFO</p>
                                </div>
                            </div>
                            <div className={classes.plan}>
                                <p className={currentStep === 2 ? classes.numberStepActive : classes.numberStep}>2</p>
                                <div className={classes.titleStepContainer}>
                                    <p className={classes.step}>STEP 2</p>
                                    <p className={classes.titleStep}>SELECT PLAN</p>
                                </div>
                            </div>
                            <div className={classes.addOn}>
                                <p className={currentStep === 3 ? classes.numberStepActive : classes.numberStep}>3</p>
                                <div className={classes.titleStepContainer}>
                                    <p className={classes.step}>STEP 3</p>
                                    <p className={classes.titleStep}>ADD-ONS</p>
                                </div>
                            </div>
                            <div className={classes.summary}>
                                <p className={currentStep === 4 ? classes.numberStepActive : classes.numberStep}>4</p>
                                <div className={classes.titleStepContainer}>
                                    <p className={classes.step}>STEP 4</p>
                                    <p className={classes.titleStep}>SUMMARY</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.right}>
                        <div className={classes.containerForm}>
                            <div className={classes.card}>
                                {
                                    renderedComponent()
                                }
                            </div>
                        </div>
                        {
                            currentStep === 5 ?
                                <div className={classes.navButton}>
                                    <div className={classes.buttons}>
                                        <button onClick={() => handlerComponent('-')} className={classes.back}>
                                            Go back
                                        </button>
                                        {
                                            currentStep === 5 ?
                                                <button onClick={() => handlerComponent('+')} className={classes.next} style={{ visibility: "hidden" }}>
                                                    Next Step
                                                </button>
                                                :
                                                <button onClick={() => handlerComponent('+')} className={classes.next}>
                                                    Next Step
                                                </button>

                                        }
                                    </div>
                                </div>
                                :
                                <div className={classes.navButton}>
                                    <div className={classes.buttons}>
                                        {
                                            currentStep === 1 ?
                                                <button className={classes.back} style={{ visibility: "hidden" }}>
                                                    Go back
                                                </button>
                                                :
                                                <button onClick={() => handlerComponent('-')} className={classes.back}>
                                                    Go back
                                                </button>
                                        }

                                        <button onClick={() => handlerComponent('+')} className={classes.next}>
                                            Next Step
                                        </button>
                                    </div>
                                </div>
                        }
                    </div>

                </div>
            </div>
        </>
    )
}
