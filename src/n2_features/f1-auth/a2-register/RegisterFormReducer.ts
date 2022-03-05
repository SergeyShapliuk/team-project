import {Dispatch} from "redux";
import {registerFormAPI} from "./RegisterFormAPI";

export type userType = {
    error:string,
    email:string,
    in:string}

export type registerStateType = {
    addedUser: userType
    error?: string;
}
const initialRegisterState: registerStateType = {
    addedUser: {} as userType,
    error: ''
}

export const registerFormReducer = (state = initialRegisterState, action: registerFormReducerActionType): registerStateType => {
    switch (action.type) {
        case REGISTER_USER: {
            debugger
            return {...state,addedUser:action.payload.addedUser}
        }
        case SET_ERROR_REGISTER: {
            debugger
            return {...state, error: action.payload.e}
        }
        default:
            return state
    }
}
type registerFormReducerActionType = registerUserACType | setErrorRegisterACType

const REGISTER_USER = 'REGISTER_USER'
export type registerUserACType = ReturnType<typeof registerUserAC>
export const registerUserAC = (data: registerStateType) => {
    debugger
    return {
        type: REGISTER_USER,
        payload: data
    } as const
}

const SET_ERROR_REGISTER = 'SET_ERROR_REGISTER'
export type setErrorRegisterACType = ReturnType<typeof setErrorRegisterAC>
export const setErrorRegisterAC = (e: string) => {
    debugger
    return {
        type: SET_ERROR_REGISTER,
        payload: {e}
    } as const
}

export const registerUserTC = (body: { email: string, password: string }) => async (dispatch: Dispatch) => {
    debugger
    try {
        let res = await registerFormAPI.registerMe(body)
        if(res.data.addedUser.error!==undefined) {
            dispatch(registerUserAC(res.data))
        }else{
            dispatch(setErrorRegisterAC(res.data.addedUser.error))
        }
    } catch (e) {
        console.log(e)
    } finally {

    }
}