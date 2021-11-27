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
                    :'https://igel.com.ua/image/cachecatalog/NASIPNYE/%D1%84%D0%BE%D1%82%D0%BE-%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%BE-%D0%BE%D1%82%D1%81%D1%83%D1%82%D1%81%D1%82%D0%B2%D1%83%D0%B5%D1%82-3000x3000.jpg'}/>
            <div className={s.description}>

            </div>

        </div>
    )
}

export default ProfileInfo