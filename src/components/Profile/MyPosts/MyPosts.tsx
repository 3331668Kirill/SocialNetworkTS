import React, {ReactElement, RefObject} from "react";
import s from './MyPosts.module.css'
import Post, {PropsPostType} from "./Post/Post";
import {ActionType} from "../../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



const MyPosts = (props: { post: Array<PropsPostType>,

    newPostText: string
    dispatch:(action: ActionType)=>void

}) => {

    let postsElements: Array<ReactElement> =
        props.post.map((p) => (<Post message={p.message} likesCount={p.likesCount}/>))

    let newPostElement: RefObject<any> = React.createRef()
    let addPost = () => {
        let text: 'ADD-POST' | 'UPDATE-NEW-POST-TEXT' | null = newPostElement.current.value
        if (text) {
            let action  = addPostActionCreator(text)
            props.dispatch(action)

        }

    }
    let onPostChange = () => {
        let action = updateNewPostTextActionCreator(newPostElement.current.value)
        props.dispatch(action)
    }

    return (
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post
                </button>
            </div>
            <div className={s.postBlock}>My Posts</div>
            <div>
                New Posts
                <div className={s.posts}>New Post</div>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts