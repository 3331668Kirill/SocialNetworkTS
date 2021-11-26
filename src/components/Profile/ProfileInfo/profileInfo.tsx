import React from "react";
import s from './profileInfo.module.css'
import {ProfileServerType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader";


const ProfileInfo = (props:{profile:ProfileServerType}) => {
    if (!props.profile){
        return <Preloader isFetching={true}/>
    }
    return (
        <div className={s.content}>
            <div>FULLNAME: {props.profile?.fullName}</div>
            <div>ID: {props.profile?.userId}</div>
            <div>ABOUT ME: {props.profile?.aboutMe}</div>
            <div>FACEBOOK: {props.profile?.contacts?.facebook}</div>
            <img className={s.img}
                src={props.profile.photos.small
                    ? props.profile.photos.small
                    :'https://static4.depositphotos.com/1000423/454/i/600/depositphotos_4548401-stock-photo-symbol-of-yin-and-yang.jpg'}/>
            <div className={s.description}>

            </div>

        </div>
    )
}

export default ProfileInfo