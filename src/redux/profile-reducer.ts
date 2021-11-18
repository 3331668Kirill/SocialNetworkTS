import {ActionType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST-TEXT';

type TypeProfilePage = {
    posts: Array<{ id: number, message: string, likesCount: number }>
    newPostText: string
    dialogs: Array<{ id: number, name: string }>
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
}


export const profileReducer = (state: TypeProfilePage = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST:
            state.newPostText = action.newText
            return state
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


