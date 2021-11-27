import React from "react";
import { NavLink } from "react-router-dom";
import s from './header.module.css'



const Header = (props:any) => {
    console.log(props)
    return (<div>

            <img src={'https://st2.depositphotos.com/4035913/6124/i/600/depositphotos_61243831-stock-photo-letter-s-logo.jpg'} />
        <div className={s.login}>
            { props.isAuth
                ? props.login
                : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>

        </div>
    )
}

export default Header