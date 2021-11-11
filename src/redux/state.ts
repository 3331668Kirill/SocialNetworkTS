import {PropsPostType} from "../components/Profile/MyPosts/Post/Post";
import {PropsDialogItem} from "../components/Dialogs/dialogs";

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
            ]
        }

    },
    getState(){
        return this._state
    },
    _callSubscriber (state:StateType){
        console.log('SSS')
    },
    // addPost(){
    //
    //     let newPost = {
    //         id: 6,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText=''
    //     this._callSubscriber(this._state)
    // },
    // updateNewPostText(newText:string){
    //     this._state.profilePage.newPostText = newText
    //     this._callSubscriber(this._state)
    //
    // },
    subscriber (observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },
    dispatch (action:ActionType){
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText=''
            this._callSubscriber(this._state)
        }else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }

    }
}

export type ActionType = {
    type: 'ADD-POST' | 'UPDATE-NEW-POST-TEXT'
    newPostText?: string
    newText:string
}



export type StateType = {
    profilePage: {
        posts: Array<PropsPostType>
        newPostText:string
        dialogs: Array<PropsDialogItem>
    }
    messagePage: {
        messages: Array<{ id: number, message: string }>

    }
}







