import React from "react";
import s from './navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={s.nav}>
            <nav >
                <div className={s.item}>
                    <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/messages' activeClassName={s.active}>Messages</NavLink>
                </div>
                <div className={`${s.item}`}>
                    <NavLink to='/Users' activeClassName={s.active}>Users</NavLink>
                </div>
                <div className={`${s.item}`}>
                    <NavLink to='/news' activeClassName={s.active}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar