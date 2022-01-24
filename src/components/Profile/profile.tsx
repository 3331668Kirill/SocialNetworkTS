import React from "react";
import s from './profile.module.css'
import ProfileInfo from "./ProfileInfo/profileInfo";
import {PropsPostType} from "./MyPosts/Post/Post";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import {ProfileServerType} from "../../redux/profile-reducer";


const Profile = (props: {
    post: Array<PropsPostType>,
    auth?: { id: number, email: string, login: string, isAuth: boolean }
    newPostText: string
    profile: ProfileServerType
    profileStatus: string
    status: string
    photos: any
    getUserProfile: (userId: number) => void
    getUserProfileStatus: (userId: number) => void
    setPhoto: (file: any) => void
    setProfileStatus: (status: string) => void

}) => {

    if (!props.profile) {
        if (props.auth) props.getUserProfile(props.auth?.id)

    }

    return (
        <div>
            <ProfileInfo profile={props.profile} setProfileStatus={props.setProfileStatus}
                         status={props.status} auth={props.auth} setPhoto={props.setPhoto}
                         getUserProfileStatus={props.getUserProfileStatus} profileStatus={props.profileStatus}/>
            <MyPostsConteiner post={props.post}
                              newPostText={props.newPostText}/>
        </div>
    )
}

export default Profile