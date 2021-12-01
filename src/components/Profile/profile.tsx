import React from "react";
import s from './profile.module.css'
import ProfileInfo from "./ProfileInfo/profileInfo";
import {PropsPostType} from "./MyPosts/Post/Post";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import {getUserProfileStatus, ProfileServerType} from "../../redux/profile-reducer";


const Profile = (props: { post: Array<PropsPostType>,
    auth?:boolean
    newPostText:string
    profile:ProfileServerType
    profileStatus:string
    status:string
    getUserProfileStatus:(userId:number)=>void
    setProfileStatus:(status:string) =>void

}) => {if (!props.profile){
    return <ProfileInfo profile={props.profile} setProfileStatus={props.setProfileStatus} status={props.status}
                        getUserProfileStatus={props.getUserProfileStatus} profileStatus={props.profileStatus}/>
}
   // if (!props.isAuth) { return <Redirect to={'/login'}/>}
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile} setProfileStatus={props.setProfileStatus} status={props.status}
                         getUserProfileStatus={props.getUserProfileStatus} profileStatus={props.profileStatus}/>
            <MyPostsConteiner post={props.post}
                      newPostText={props.newPostText}/>
        </div>
    )
}

export default Profile