import {
    SET_STEP,
    SET_PROFILE
} from './constant';

export const setStep = (step) => ({
    type: SET_STEP,
    step
})

export const setProfile = (profile)=>({
    type: SET_PROFILE,
    profile
})