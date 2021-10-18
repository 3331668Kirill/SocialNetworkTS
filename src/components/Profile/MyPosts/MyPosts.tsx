import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let postData = [
        {id: 1, message: 'Hello bro', likesCount: 12},
        {id: 2, message: 'First post', likesCount: 48},
        {id: 3, message: 'How are you', likesCount: 23},
        {id: 4, message: 'Ha ha ha', likesCount: 47},
        {id: 5, message: 'Bye', likesCount: 5}
    ]

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
            <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
            <Post message={postData[1].message} likesCount={postData[0].likesCount}/>
            <Post message={postData[2].message} likesCount={postData[0].likesCount}/>
            <Post message={postData[3].message} likesCount={postData[0].likesCount}/>
            <Post message={postData[4].message} likesCount={postData[0].likesCount}/>

        </div>
    )
}

export default MyPosts