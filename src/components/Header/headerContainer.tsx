import React from "react";
import s from './header.module.css'
import Header, {HeaderPropsType} from "./header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserDataAC} from "../../redux/auth-reducer";
import {authMe} from "../common/api";

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        authMe().then(data => {
                if (data.resultCode===0) {
                    console.log(data.data)
                    this.props.setAuthUserDataAC(data.data)
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
        login:state.authPage.data.login,

    }
}


export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer)