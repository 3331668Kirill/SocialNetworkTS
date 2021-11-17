import {PropsPostType} from "../components/Profile/MyPosts/Post/Post";
import {PropsDialogItem} from "../components/Dialogs/dialogs";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";




export let store = {
    _state:  {
        profilePage: {
            posts: [
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
        },
        messagePage: {
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'Hi'},
                {id: 3, message: 'How are you'},
                {id: 4, message: 'Fine'},
                {id: 5, message: 'Bye'}
            ],
            newMessageBody:''
        },


    },
    getState(){
        return this._state
    },
    _callSubscriber (state:StateType){
        console.log('SSS')
    },

    subscriber (observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },
    dispatch (action:ActionType){
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.messagePage = dialogReducer(this._state.messagePage,action)
            this._callSubscriber(this._state)
        }


}




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







