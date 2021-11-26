import {ActionType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
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
    profile: null
}


export const profileReducer = (state: TypeProfilePage&any = initialState, action: ActionType & {profile:ProfileServerType}) => {
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
            console.log(action.profile)
            return {...state,profile:action.profile}
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
