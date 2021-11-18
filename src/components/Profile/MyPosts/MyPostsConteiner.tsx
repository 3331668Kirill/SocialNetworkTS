import React from "react";

import {PropsPostType} from "./Post/Post";
import {ActionType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsConteiner = (props: {
//     post: Array<PropsPostType>,
//     newPostText: string
//     dispatch:(action: ActionType)=>void
//
// }) => {
//
//
//     let addPost = (text:'ADD-POST' | 'UPDATE-NEW-POST-TEXT' | null) => {
//        if (text) {
//             let action  = addPostActionCreator(text)
//             props.dispatch(action)
//
//
//         }
//
//     }
//     let onPostChange = (text:'ADD-POST' | 'UPDATE-NEW-POST-TEXT' | null) => {
//         if (text) {
//             let action = updateNewPostTextActionCreator(text)
//             props.dispatch(action)
//         }
//     }
//
//     return (
//         <MyPosts post={props.post}
//                  newPostText={props.newPostText}
//                  updateNewPostText={onPostChange}
//                  addPost={addPost}
//         />
//     )
// }


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

const MyPostsConteiner = connect(null, mapDispatchToProps)(MyPosts)
export default MyPostsConteiner