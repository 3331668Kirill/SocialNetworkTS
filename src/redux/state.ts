import {PropsPostType} from "../components/Profile/MyPosts/Post/Post";
import {PropsDialogItem} from "../components/Dialogs/dialogs";
let rerenderEntireTree = (state:StateType) =>{
    console.log('SSS')
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
export let state: StateType = {
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

}
// export type AddPostType = {
//     addPost: (postMessage: string)=>void
// }
export let addPost:(postMessage: string)=>void = () =>{
    let newPost = {
        id: 6,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}
export let updateNewPostText = (newText:string) =>{
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)

}

export const subscriber = (observer: (state: StateType) => void) => {
    rerenderEntireTree = observer
}

