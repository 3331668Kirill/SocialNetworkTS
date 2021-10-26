import React, {ReactElement} from "react";
import s from './MyPosts.module.css'
import Post, {PropsPostType} from "./Post/Post";


const MyPosts = (props: { post: Array<PropsPostType>, addPost: (postMessage: string)=>void} ) => {

    let postsElements: Array<ReactElement> =
        props.post.map((p) => (<Post message={p.message} likesCount={p.likesCount}/>))

    let newPostElement:React.RefObject<HTMLTextAreaElement> = React.createRef()
    let addPost = () => {

        let text:any = newPostElement.current?.value
        props.addPost(text)
        //newPostElement.current?.value
    }

    return (
        <div>
            <div>
                <textarea ref={newPostElement}> </textarea>
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