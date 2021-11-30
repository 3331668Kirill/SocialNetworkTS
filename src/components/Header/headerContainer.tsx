import React from "react";
import s from './header.module.css'
import Header, {HeaderPropsType} from "./header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
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


export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)