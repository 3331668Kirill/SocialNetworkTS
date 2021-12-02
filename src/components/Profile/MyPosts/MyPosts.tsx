import React, {ReactElement, RefObject} from "react";
import s from './MyPosts.module.css'
import Post, {PropsPostType} from "./Post/Post";


type TextType = 'ADD-POST' | 'UPDATE-NEW-POST-TEXT' | null

const MyPosts = (props: {
    post: Array<PropsPostType>,
    updateNewPostText:(text:TextType)=>void
    addPost:(text:TextType)=>void
    newPostText: string


}) => {

    let postsElements: Array<ReactElement> =
        props.post.map((p) => (<Post message={p.message} likesCount={p.likesCount}/>))

    let newPostElement: RefObject<any> = React.createRef()
    let addPost = () => {
        let text = newPostElement.current.value
        if (text) {
            props.addPost(text)
        }

    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)

    }

    return (
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost} disabled={!props.newPostText}> Add post </button>
                {!props.newPostText && <span style={{color:'red'}}>text is required! Enter the text in the field</span>}
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