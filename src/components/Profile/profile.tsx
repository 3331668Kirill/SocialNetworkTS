import React from "react";
import s from './profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/profileInfo";
import {PropsPostType} from "./MyPosts/Post/Post";


const Profile = (props: { post: Array<PropsPostType>,
    addPost: (postMessage: string)=>void,
    updateNewPostText: (newText:string) =>void
    newPostText:string

}) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts post={props.post}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
                     newPostText={props.newPostText}/>

        </div>
    )
}

export default Profile