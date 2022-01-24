import React from "react";


import {ActionType, StateType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps: any = (state: StateType) => {
    return {
        post: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }

}

const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        updateNewPostText: (text: 'ADD-POST' | 'UPDATE-NEW-POST-TEXT' | null) => {
            if (text) {
                let action = updateNewPostTextActionCreator(text)
                dispatch(action)
            }
        },
        addPost: (text: 'ADD-POST' | 'UPDATE-NEW-POST-TEXT' | null) => {
            if (text) {
                let action = addPostActionCreator(text)
                dispatch(action)
            }

        }
    }


}

const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsConteiner