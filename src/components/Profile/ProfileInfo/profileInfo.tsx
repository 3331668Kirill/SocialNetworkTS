import React, {useState} from "react";
import s from './profileInfo.module.css'
import css from '../../Dialogs/dialogs.module.css'
import { ProfileServerType} from "../../../redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props:{profile:ProfileServerType, profileStatus:string,status:string,
    getUserProfileStatus:(userId:number)=>void,
    setPhoto?:(file:any)=>void,
    photos?:any
    auth?:{id:number,email:string, login:string, isAuth:boolean}
    setProfileStatus:(status:string) =>void}) => {

    props.getUserProfileStatus(props.profile?.userId)

    const [status, setStatus] = useState<string>(props.status)
    const [editMode, setEditMode] = useState<boolean>(false)


    const onSetStatus = (e:string) => {
      setStatus(e)
     }
     const setPhotos = (e:any) => {
        setEditMode(true)
         console.log(e.target.files)
        if(e.target.files.length && props.setPhoto){
            props.setPhoto(e.target.files[0])
        }
        setEditMode(false)
     }
    const setEditModeCB = (e:boolean) => {
        setEditMode(e)
        if (!e){
            props.setProfileStatus(status)
            localStorage.setItem('status', status)
        }
    }
    if (!props.profile){

        console.log(props)
        return (<div>
            <img src={props.photos} />
            <ProfileStatus status={status} setStatus={onSetStatus} editMode={editMode} setEditMode={setEditModeCB}/>
                <input type={'file'} onChange={setPhotos}/>
        </div>
    )
    }


    return (

        <div className={s.content}>
            <img className={s.img}
                 src={props.profile.photos.small
                     ? props.profile.photos.small
                     :'https://igel.com.ua/image/cachecatalog/NASIPNYE/%D1%84%D0%BE%D1%82%D0%BE-%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%BE-%D0%BE%D1%82%D1%81%D1%83%D1%82%D1%81%D1%82%D0%B2%D1%83%D0%B5%D1%82-3000x3000.jpg'}/>

            <div>FULLNAME: {props.profile?.fullName}</div>
            <div>ID: {props.profile?.userId}</div>
            <div>ABOUT ME: {props.profile?.aboutMe}</div>
            <div>FACEBOOK: {props.profile?.contacts?.facebook}</div>
            <div>STATUS: {props.profileStatus}</div>



             {props.profile.userId === props.auth?.id &&
            <div className={s.description}>
                <img src={props.photos} />
                <ProfileStatus status={status} setStatus={onSetStatus} editMode={editMode} setEditMode={setEditModeCB}/>

                <label className={`${css.button} + ${s.button}`}>Change photo
                <input type={'file'} onChange={setPhotos}/>
                </label>
            </div>
            }
        </div>
    )
}

export default ProfileInfo