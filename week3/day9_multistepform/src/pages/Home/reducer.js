import { produce } from "immer";
import { SET_STEP, SET_PROFILE } from './constant';

export const initialState = {
    step: 1,
    profile: {
        name: "",
        email: "",
        phone_number: "",
        plan_type: "Arcade",
        plan_price: 9,
        plan_yearly: false,
        addOns: []
    },
    totalPrice: 0
}

const homeReducer = (state = initialState, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case SET_STEP:
                draft.step = action.step;
                break
            case SET_PROFILE:
                draft.profile = action.profile
            default:
                break;
        }
    })

export default homeReducer;