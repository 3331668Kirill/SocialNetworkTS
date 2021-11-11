import React from "react";
import s from './profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/profileInfo";
import {PropsPostType} from "./MyPosts/Post/Post";
import {ActionType} from "../../redux/state";


const Profile = (props: { post: Array<PropsPostType>,

    newPostText:string
    dispatch:(action:ActionType)=>void

}) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts post={props.post}
                     dispatch={props.dispatch}

                     newPostText={props.newPostText}/>

        </div>
    )
}

export default Profile