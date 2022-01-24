import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Login} from "./login";
import {getAuthUserData} from "../../redux/auth-reducer";

const mapStateToProps: any = (state: AppStateType) => {
    console.log(state)
    return {
        auth: state.authPage.data,
    }

}


const LoginConteiner = connect(mapStateToProps, {getAuthUserData})(Login)
export default LoginConteiner