import React from "react";
import s from './header.module.css'
import Header from "./header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserDataAC} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(responce => {
                if (responce.data.resultCode===0) {
                    console.log(responce.data.data)
                    this.props.setAuthUserDataAC(responce.data.data)
                }
            })
    }


    render() {
        return (
            <div className={s.header}>
                <Header {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state:AppStateType) => {
    return {
        isAuth:state.authPage.data.isAuth,
        login:state.authPage.data.login
    }
}


export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer)