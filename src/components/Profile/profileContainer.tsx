import React from "react";
import s from './profile.module.css'
import {PropsPostType} from "./MyPosts/Post/Post";
import Profile from "./profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileServerType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {WithAuthRedirect} from "../hoc/withAuthRedirect";

type ProfileType = {
    post: Array<PropsPostType>
    newPostText: string
    profile: ProfileServerType
    getUserProfile:(userId:number) =>void
}

class ProfileContainer extends React.Component<ProfileType> {

   render() {
        console.log(this.props.profile)

        return (
            <div className={s.content}>
                <Profile {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps: any = (state: AppStateType) => {
    console.log (state)
    return {
        profile: state.profilePage.profile,
        auth: state.authPage.data.isAuth
    }
}

export default connect(mapStateToProps, {getUserProfile})(WithAuthRedirect(ProfileContainer))