import {ActionType, store} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST-TEXT';

type TypeProfilePage = {
    posts: Array<{ id: number, message: string, likesCount: number }>
    newPostText: string
    dialogs: Array<{ id: number, name: string }>
}


//let state = store.getState().profilePage
export const profileReducer = (state: TypeProfilePage, action: ActionType) => {
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


