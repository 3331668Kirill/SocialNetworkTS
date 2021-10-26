import React, {ReactElement, RefObject} from "react";
import s from './MyPosts.module.css'
import Post, {PropsPostType} from "./Post/Post";



const MyPosts = (props: { post: Array<PropsPostType>,
    addPost: (postMessage: string) => void,
    updateNewPostText: (newText:string) =>void
    newPostText: string

}) => {

    let postsElements: Array<ReactElement> =
        props.post.map((p) => (<Post message={p.message} likesCount={p.likesCount}/>))

    let newPostElement: RefObject<any> = React.createRef()
    let addPost = () => {
        let text: string | null = newPostElement.current.value
        if (text) {
            props.addPost(text)
            props.updateNewPostText('')
        }

    }
    let onPostChange = () => {
        props.updateNewPostText(newPostElement.current.value)
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