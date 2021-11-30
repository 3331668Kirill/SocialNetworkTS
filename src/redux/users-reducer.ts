import {ProfileServerType} from "./profile-reducer";
import {followChange, getUsers, unFollowChange} from "../components/common/api";
import {Dispatch} from "react";


const SET_USERS = 'SET_USERS'
const SET_TOTAL_PAGE = 'SET_TOTAL_PAGE'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'
const IS_FETCHING = 'IS_FETCHING'

export type TypeUsers = {
    id: number, followed: boolean, name: string, status: string, photos: { small: string | undefined, large: string | undefined }, location?: { city: string, country: string }
}

export type TypeUsersPage = {
    users: Array<TypeUsers>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}
let initialState: TypeUsersPage = {
    users: [
        // {id: 1, followed: false, fullName: 'Dmitry', status: 'Director', location:{city:'Minsk', country:'Belarus'}},
        // {id: 2, followed: true, fullName: 'George', status: 'Engineer', location:{city:'Minsk', country:'Belarus'}},
        // {id: 3, followed: false, fullName: 'Andrew', status: 'Accounter', location:{city:'Borisov', country:'Belarus'}},
    ],
    pageSize: 5,
    totalCount: 50,
    currentPage: 1,
    isFetching: false
}

export const usersReducer = (state: TypeUsersPage = initialState, action: {
    type: string, currentPage: number, totalCount: number,
    userId: number, isFetching: boolean, users: Array<TypeUsers>
}) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(t => {
                    if (t.id === action.userId) {
                        return {...t, followed: true}
                    }
                    return t
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(t => {
                    if (t.id === action.userId) {
                        return {...t, followed: false}
                    }
                    return t
                })
            }
        case SET_USERS:
            return {...state, users: [...action.users]}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_PAGE:
            return {...state, totalCount: action.totalCount}
        case IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export type FollowACType = {
    type: string
    userId: number
}
export type SetUserACType = {
    type: string
    users: Array<TypeUsers>
}

export type SetCurrentPageACType = {
    type: string
    currentPage: number
}
export type SetTotalUserPageACType = {
    type: string
    totalCount: number
}
export type SetIsFetchingACType = {
    type: string
    isFetching: boolean
}
export type setUserProfileACType = {
    type: string
    profile: ProfileServerType
}
export type ActionTypes = setUserProfileACType | SetIsFetchingACType | SetTotalUserPageACType
    | SetCurrentPageACType | SetUserACType | FollowACType
export type GetUsersThunkCreatorType = (currentPage: number, pageSize: number) =>
    (dispatch: Dispatch<SetIsFetchingACType | SetUserACType | SetTotalUserPageACType>) => void

export let followActionCreator = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    }
}
export let unFollowActionCreator = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}
export const setUsersActionCreator = (users: Array<TypeUsers>) => {
    return {
        type: SET_USERS,
        users
    }
}
export const setCurrentPageActionCreator = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}
export const setTotalUserPageActionCreator = (totalPage: number) => {
    return {
        type: SET_TOTAL_PAGE,
        totalCount: totalPage
    }
}
export const setIsFetchingActionCreator = (isFetching: boolean) => {
    return {
        type: IS_FETCHING,
        isFetching
    }
}

export const getUsersThunkCreator: GetUsersThunkCreatorType = (currentPage: number, pageSize: number) => {

    return (dispatch: Dispatch<SetIsFetchingACType | SetUserACType | SetTotalUserPageACType>) => {
        dispatch(setIsFetchingActionCreator(true))
        getUsers(currentPage, pageSize).then(data => {
            dispatch(setIsFetchingActionCreator(false))
            dispatch(setUsersActionCreator(data.items))
            dispatch(setTotalUserPageActionCreator(data.totalCount))
        })
    }
}
export const unFollowTnunk = (id: number) => {
    return (dispatch: Dispatch<SetIsFetchingACType | FollowACType>) => {
        dispatch(setIsFetchingActionCreator(true))
        unFollowChange(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollowActionCreator(id))
                dispatch(setIsFetchingActionCreator(false))
            }
        })
    }
}
export const followTnunk = (id: number) => {
    return (dispatch: Dispatch<SetIsFetchingACType | FollowACType>) => {
        dispatch(setIsFetchingActionCreator(true))
        followChange(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(followActionCreator(id))
                dispatch(setIsFetchingActionCreator(false))
            }
        })
    }
}





