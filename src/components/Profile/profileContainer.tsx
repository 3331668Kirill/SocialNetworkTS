import React from "react";
import s from './profile.module.css'
import {PropsPostType} from "./MyPosts/Post/Post";
import Profile from "./profile";
import {connect} from "react-redux";
import {getUserProfile, getUserProfileStatus, ProfileServerType, setProfileStatus} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../hoc/withAuthRedirect";

type ProfileType = {
    post: Array<PropsPostType>
    newPostText: string
    profile: ProfileServerType
    profileStatus:string
    status:string
    getUserProfile:(userId:number) =>void
    getUserProfileStatus:(userId:number) =>void
    setProfileStatus:(status:string) =>void
}

class ProfileContainer extends React.Component<ProfileType> {

   render() {
        console.log(this.props.status)

        return (
            <div className={s.content}>
                <Profile {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps: any = (state: AppStateType) => {

    return {
        profile: state.profilePage.profile,
        profileStatus: state.profilePage.profileStatus,
        status: state.profilePage.status,
        auth: state.authPage.data.isAuth

    }
}

export default connect(mapStateToProps, {getUserProfile, getUserProfileStatus, setProfileStatus})(WithAuthRedirect(ProfileContainer))