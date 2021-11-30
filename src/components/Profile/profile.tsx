import React from "react";
import s from './profile.module.css'
import ProfileInfo from "./ProfileInfo/profileInfo";
import {PropsPostType} from "./MyPosts/Post/Post";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import {ProfileServerType} from "../../redux/profile-reducer";

const Profile = (props: { post: Array<PropsPostType>,

    newPostText:string
    profile:ProfileServerType

}) => {if (!props.profile){
    return <ProfileInfo profile={props.profile}/>
}

    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsConteiner post={props.post}
                      newPostText={props.newPostText}/>
        </div>
    )
}

export default Profile