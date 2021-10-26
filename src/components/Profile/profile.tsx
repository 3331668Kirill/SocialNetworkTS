import React from "react";
import s from './profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/profileInfo";
import {PropsPostType} from "./MyPosts/Post/Post";


const Profile = (props: { post: Array<PropsPostType>, addPost: (postMessage: string)=>void}) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts post={props.post} addPost={props.addPost}/>

        </div>
    )
}

export default Profile