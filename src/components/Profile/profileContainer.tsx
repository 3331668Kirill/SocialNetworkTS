import React from "react";
import s from './profile.module.css'
import {PropsPostType} from "./MyPosts/Post/Post";
import Profile from "./profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileServerType, setUserProfileAC} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";

type ProfileType = {
    post: Array<PropsPostType>
    newPostText: string
    profile: ProfileServerType
    setUserProfileAC: (profile: ProfileServerType) => void
}

class ProfileContainer extends React.Component<ProfileType> {

    componentDidMount() {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile`)
        //     .then(responce => {
        //
        //         this.props.setUserProfileAC(responce.data)
        //
        //     })
    }


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
    return {
        profile: state.profilePage.profile
    }

}


export default connect(mapStateToProps, {setUserProfileAC})(ProfileContainer)