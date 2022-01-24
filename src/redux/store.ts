import {PropsPostType} from "../components/Profile/MyPosts/Post/Post";
import {PropsDialogItem} from "../components/Dialogs/dialogs";


export type ActionType = {
    type: string                 //'ADD-POST' | 'UPDATE-NEW-POST-TEXT'
    newPostText?: string
    newText:string
    body:string
}

export type StateType = {
    profilePage: {
        posts: Array<PropsPostType>
        newPostText:string
        dialogs: Array<PropsDialogItem>
    }
    messagePage: {
        messages: Array<{ id: number, message: string }>
        newMessageBody:string
    }
}







