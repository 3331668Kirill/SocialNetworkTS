import React from "react";
import s from './profileInfo.module.css'






const ProfileInfo = () => {
    return (
        <div className={s.content}>

            <img className={s.img}
                src={'https://static4.depositphotos.com/1000423/454/i/600/depositphotos_4548401-stock-photo-symbol-of-yin-and-yang.jpg'}/>
            <div className={s.description}>
                avatar + descr
            </div>

        </div>
    )
}

export default ProfileInfo