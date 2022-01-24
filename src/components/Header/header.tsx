import React from "react";
import {NavLink} from "react-router-dom";
import s from './header.module.css'
import css from '../Dialogs/dialogs.module.css'
import img from './image.jpeg'
import {disAuthorization} from "../common/api";


export type HeaderPropsType = {
    isAuth: boolean
    login: string
    getAuthUserData: () => void
    getDisAuth: any
}


const Header = (props: HeaderPropsType) => {


    return (<div>

            <img src={img}/>

            <div className={s.login}>
                {props.isAuth
                    ? <span> {props.login}
                        <button className={css.button} onClick={() => {
                            disAuthorization().then(data => {

                                if (data.resultCode === 0) props.getDisAuth()
                            })
                        }}> LOG OUT</button>
                    </span>
                    : <NavLink to={'/login'}>
                        <button className={css.button}>LOG IN</button>
                    </NavLink>
                }

                <div>


                </div>


            </div>

        </div>
    )
}

export default Header