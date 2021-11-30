import {authMe} from "../components/common/api";
import {Dispatch} from "react";

const SET_IS_AUTH = 'SET_IS_AUTH';

export type AuthServerType = {
    resultCode: number
    messages: Array<string>
    data: {
        id: number
        email: string
        login: string
        isAuth: boolean
    }
}

let initialState = {
    resultCode: null,
    messages: null,
    data: {
        id: null,
        email: null,
        login: null,
        isAuth: false
    },
}

export const authReducer = (state: AuthServerType & any = initialState,
                            action: {type:string,id:number,email:string, login:string, isAuth:boolean} ) => {
    switch (action.type) {
        case SET_IS_AUTH:
            console.log(action)
             let newState = {...state,
                    data: {
                        ...state.data,
                        id: action.id,
                        email: action.email,
                        login: action.login,
                        isAuth: action.isAuth
                    }
            }
            console.log(newState)
            return newState

        default:
            return state
    }
}

export let setAuthUserDataAC = (state:{id: number, login: string, email: string}) => {

    return {
        type: SET_IS_AUTH,
        id: state.id,
        email: state.email,
        login: state.login,
        isAuth:true
    }
}

export const getAuthUserData = () => (dispatch:Dispatch<{id: number, login: string, email: string}>)=>{
    authMe().then(data => {
        if (data.resultCode===0) {
            dispatch(setAuthUserDataAC(data.data))
        }
    })
}
