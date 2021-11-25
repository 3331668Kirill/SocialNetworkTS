import React from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {
    followActionCreator,
    FollowACType,
    setCurrentPageActionCreator,
    SetCurrentPageACType, setIsFetchingActionCreator, SetIsFetchingACType,
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
    isFetching:boolean
}

const mapStateToProps:any = (state:AppStateType):MapStateToPropsType =>{
    return {
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
    }

}
const mapDispatchToProps = (dispatch:(action: FollowACType | SetUserACType
    | SetCurrentPageACType | SetTotalUserPageACType | SetIsFetchingACType) => void) =>{
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
        },
        setIsFetching: (isFetching:boolean) =>{
            dispatch(setIsFetchingActionCreator(isFetching))
        }


    }
}


export default connect (mapStateToProps,mapDispatchToProps)(Users)