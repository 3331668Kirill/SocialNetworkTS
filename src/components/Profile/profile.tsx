import React from "react";
import s from './profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/profileInfo";
import {PropsPostType} from "./MyPosts/Post/Post";

const Profile = (props: { post: Array<PropsPostType> }) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts post={props.post}/>

        </div>
    )
}

export default Profile