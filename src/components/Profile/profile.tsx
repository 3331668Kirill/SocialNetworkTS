import React from "react";
import s from './profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/profileInfo";






const Profile = () => {
    return (
        <div className={s.content}>
           <ProfileInfo/>
           <MyPosts/>

        </div>
    )
}

export default Profile