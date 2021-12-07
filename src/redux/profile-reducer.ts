import {ActionType} from "./store";
import {getProfile, getProfileStatus, setPhotoOnServer, setProfileStatusOnServer} from "../components/common/api";
import {Dispatch} from "react";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_PROFILE_STATUS = 'SET_USER_PROFILE_STATUS';
const SET_USER_PROFILE_STATUS_ON_SERVER = 'SET_USER_PROFILE_STATUS_ON_SERVER';
const SET_PHOTO_ON_SERVER = 'SET_PHOTO_ON_SERVER';
export type ProfileServerType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}


type TypeProfilePage = {
    posts: Array<{ id: number, message: string, likesCount: number }>
    newPostText: string
    dialogs: Array<{ id: number, name: string }>
    profile:ProfileServerType
    profileStatus:string
    status:string,
    photos: any
}
let initialState ={ posts: [
    {id: 1, message: 'Hello bro', likesCount: 12},
    {id: 2, message: 'First post', likesCount: 48},
    {id: 3, message: 'How are you', likesCount: 23},
    {id: 4, message: 'Ha ha ha', likesCount: 47},
    {id: 5, message: 'Bye', likesCount: 5}
],
    newPostText: 'input here',
    dialogs: [
    {id: 1, name: 'Dims'},
    {id: 2, name: 'Ann'},
    {id: 3, name: 'Irina'},
    {id: 4, name: 'Patrick'},
    {id: 5, name: 'Vova'}
],
    profile: null,
    profileStatus:'',
    status:'',
    photos: null
}


export const profileReducer = (state: TypeProfilePage&any = initialState,
                               action: ActionType & {profile:ProfileServerType, photos:any,
                                   profileStatus:string, status:string}) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            }
            state = {...state, posts:[...state.posts, newPost], newPostText:''}  //state.posts.push(newPost)


            return state
        case UPDATE_NEW_POST:
        state = {...state, newPostText:action.newText}

            return state
        case SET_USER_PROFILE:

            return {...state,profile: action.profile}
        case SET_USER_PROFILE_STATUS:

            return {...state,profileStatus:action.profileStatus}
        case SET_USER_PROFILE_STATUS_ON_SERVER:

            return {...state,status:action.status}
        case SET_PHOTO_ON_SERVER:

            return {...state,...state.profile,photos:action.photos}
        default:
            return state
    }
}

export let addPostActionCreator = (text:string) =>{

    return {
        type: ADD_POST,
        newText: text,
        body:''
    }
}
export let updateNewPostTextActionCreator = (text:string) =>{

    return {
        type: UPDATE_NEW_POST, newPostText:'' , newText:text, body:''
    }
}

export let setUserProfileAC = (profile:ProfileServerType) =>{

    return {
        type: SET_USER_PROFILE,
        profile
    }
}
export let setUserProfileStatusAC = (profileStatus:string) =>{

    return {
        type: SET_USER_PROFILE_STATUS,
        profileStatus
    }
}
export let setProfileStatusOnServerAC = (status:string) =>{

    return {
        type: SET_USER_PROFILE_STATUS_ON_SERVER,
        status
    }
}
export let setPhotoOnServerAC = (photos:any) =>{

    return {
        type: SET_PHOTO_ON_SERVER,
        photos
    }
}

export let getUserProfile = (userId:number) => (dispatch:Dispatch<{ type:string, profile:ProfileServerType }>)=>{
    getProfile(userId).then(data => {
        dispatch(setUserProfileAC(data))
    })
}
export let getUserProfileStatus = (userId:number) => (dispatch:Dispatch<{ type:string, profileStatus:string }>)=>{
    getProfileStatus(userId).then(data => {
        dispatch(setUserProfileStatusAC(data))
    })
}
export let setProfileStatus = (status:string) => (dispatch:Dispatch<{ type:string, status:string }>)=>{
    setProfileStatusOnServer(status).then(data => {
        if (data.resultCode===0){
        dispatch(setProfileStatusOnServerAC(status))
        }
    })
}

export let setPhoto = (file:any) => async (dispatch:Dispatch<{ type:string, photos:any }>) =>{

    let data = await setPhotoOnServer(file)
    if (data.data.resultCode===0){
        dispatch(setPhotoOnServerAC(data.data.data.photos.large))
    }
}
