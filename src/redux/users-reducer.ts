import * as url from "url";

const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

export type TypeUsers = {
    id: number, followed:boolean, name: string, status:string,photos:{small:string | undefined, large:string | undefined}, location?: {city:string, country:string}
}

export type TypeUsersPage = {
    users: Array<TypeUsers>

}
let initialState: TypeUsersPage ={
    users: [
    // {id: 1, followed: false, fullName: 'Dmitry', status: 'Director', location:{city:'Minsk', country:'Belarus'}},
    // {id: 2, followed: true, fullName: 'George', status: 'Engineer', location:{city:'Minsk', country:'Belarus'}},
    // {id: 3, followed: false, fullName: 'Andrew', status: 'Accounter', location:{city:'Borisov', country:'Belarus'}},
],
}

export const usersReducer = (state: TypeUsersPage = initialState, action: {type:string, userId:number, users:Array<TypeUsers>}) => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(t=>{
                if (t.id === action.userId) {
                    return {...t, followed: true}
                }
                return t
                })}
        case UNFOLLOW:
            return {...state, users: state.users.map(t=>{
                    if (t.id === action.userId) {
                        return {...t, followed: false}
                    }
                    return t
                })}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export type FollowACType = {
    type:string
    userId:number
}
export type SetUserACType = {
    type:string
    users:Array<TypeUsers>
}

export let followActionCreator = (userId:number) =>{

    return {
        type: FOLLOW,
        userId
    }
}
export let unFollowActionCreator = (userId:number) =>{

    return {
        type: UNFOLLOW,
        userId
    } as const
}
export const setUsersActionCreator = (users:Array<TypeUsers>) =>{
    return {
        type: SET_USERS,
        users
    }
}


