import React, {ReactElement} from "react";
import s from './MyPosts.module.css'
import Post, {PropsPostType} from "./Post/Post";


const MyPosts = (props: { post: Array<PropsPostType> }) => {

    let postsElements: Array<ReactElement> =
        props.post.map((p) => (<Post message={p.message} likesCount={p.likesCount}/>))

    return (
        <div>
            <div>
                <textarea> </textarea>
            </div>
            <div>
                <button>Add post</button>
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