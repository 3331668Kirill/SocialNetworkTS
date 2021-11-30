import React, {Dispatch} from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import { ActionTypes, followTnunk, getUsersThunkCreator,  setCurrentPageActionCreator,
   TypeUsers, unFollowTnunk} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile} from "../../redux/profile-reducer";

type MapStateToPropsType = {
    users: Array<TypeUsers>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}
const mapStateToProps: any = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
const mapDispatchToProps = (dispatch: (action: ActionTypes
    | any) => void) => {
    return {
        followTnunk: (userId: number) => {
            dispatch(followTnunk(userId))
        },
        unfollowThunk: (userId: number) => {
            dispatch(unFollowTnunk(userId))
        },

        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageActionCreator(currentPage))
        },

        getUserProfile: (userId: number) => dispatch(getUserProfile(userId)),
        getUsers: (currentPage: number, pageSize: number) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)