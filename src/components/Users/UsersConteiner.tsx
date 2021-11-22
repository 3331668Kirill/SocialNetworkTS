import React from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {
    followActionCreator,
    FollowACType, SetUserACType,
    setUsersActionCreator,
    TypeUsers,
    unFollowActionCreator
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";


type MapStateToPropsType = {
    users:Array<TypeUsers>
}

const mapStateToProps:any = (state:AppStateType):MapStateToPropsType =>{
    return {
        users:state.usersPage.users
    }

}
const mapDispatchToProps = (dispatch:(action: FollowACType | SetUserACType) => void) =>{
    return {
        follow:(userId:number)=>{
            dispatch(followActionCreator(userId))
        },
        unfollow:(userId:number)=>{
           dispatch(unFollowActionCreator(userId))
        },
        setUsers:(users:Array<TypeUsers>)=>{
            dispatch(setUsersActionCreator(users))
        }

    }
}


export default connect (mapStateToProps,mapDispatchToProps)(Users)