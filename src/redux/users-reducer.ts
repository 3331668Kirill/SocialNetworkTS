import * as url from "url";

const SET_USERS = 'SET_USERS'
const SET_TOTAL_PAGE = 'SET_TOTAL_PAGE'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

export type TypeUsers = {
    id: number, followed:boolean, name: string, status:string,photos:{small:string | undefined, large:string | undefined}, location?: {city:string, country:string}
}

export type TypeUsersPage = {
    users: Array<TypeUsers>
    pageSize: number
    totalCount:number
    currentPage:number
}
let initialState: TypeUsersPage ={
    users: [
    // {id: 1, followed: false, fullName: 'Dmitry', status: 'Director', location:{city:'Minsk', country:'Belarus'}},
    // {id: 2, followed: true, fullName: 'George', status: 'Engineer', location:{city:'Minsk', country:'Belarus'}},
    // {id: 3, followed: false, fullName: 'Andrew', status: 'Accounter', location:{city:'Borisov', country:'Belarus'}},
],
    pageSize:5,
    totalCount:50,
    currentPage:1
}

export const usersReducer = (state: TypeUsersPage = initialState, action: {type:string, currentPage:number, totalCount:number,
    userId:number, users:Array<TypeUsers>}) => {
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
            return {...state, users: [ ...action.users]}

        case SET_CURRENT_PAGE:
            return {...state, currentPage:action.currentPage}

        case SET_TOTAL_PAGE:
            return {...state, totalCount:action.totalCount}
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

export type SetCurrentPageACType = {
    type:string
    currentPage:number
}
export type SetTotalUserPageACType = {
    type:string
    totalCount:number
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
export const setCurrentPageActionCreator = (currentPage:number) =>{
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}
export const setTotalUserPageActionCreator = (totalPage:number) =>{
    return {
        type: SET_TOTAL_PAGE,
        totalCount: totalPage
    }
}

