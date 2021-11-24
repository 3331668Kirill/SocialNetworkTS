import React from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {
    followActionCreator,
    FollowACType,
    setCurrentPageActionCreator,
    SetCurrentPageACType,
    setTotalUserPageActionCreator,
    SetTotalUserPageACType,
    SetUserACType,
    setUsersActionCreator,
    TypeUsers,
    unFollowActionCreator
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";


type MapStateToPropsType = {
    users:Array<TypeUsers>
    pageSize:number
    totalCount:number
    currentPage:number
}

const mapStateToProps:any = (state:AppStateType):MapStateToPropsType =>{
    return {
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage:state.usersPage.currentPage
    }

}
const mapDispatchToProps = (dispatch:(action: FollowACType | SetUserACType | SetCurrentPageACType | SetTotalUserPageACType) => void) =>{
    return {
        follow:(userId:number)=>{
            dispatch(followActionCreator(userId))
        },
        unfollow:(userId:number)=>{
           dispatch(unFollowActionCreator(userId))
        },
        setUsers:(users:Array<TypeUsers>)=>{
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (currentPage:number) =>{
            dispatch(setCurrentPageActionCreator(currentPage))
        },
        setTotalUserPage: (totalPage:number) =>{
            dispatch(setTotalUserPageActionCreator(totalPage))
        }

    }
}


export default connect (mapStateToProps,mapDispatchToProps)(Users)