import React, {ReactElement} from "react";
import s from './MyPosts.module.css'
import Post, {TypePropsPost} from "./Post/Post";

const MyPosts = () => {
    let postData: Array<TypePropsPost> = [
        {id: 1, message: 'Hello bro', likesCount: 12},
        {id: 2, message: 'First post', likesCount: 48},
        {id: 3, message: 'How are you', likesCount: 23},
        {id: 4, message: 'Ha ha ha', likesCount: 47},
        {id: 5, message: 'Bye', likesCount: 5}
    ]
    let postsElements: Array<ReactElement> = postData.map(p=>(<Post message={p.message} likesCount={p.likesCount}/>))

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