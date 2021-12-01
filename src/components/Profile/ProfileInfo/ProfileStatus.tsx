import React, {ChangeEvent} from "react";



const ProfileStatus = (props:{status:string, editMode:boolean, setStatus:(e:any)=>void, setEditMode:any}) => {
        const setStatus = (e:ChangeEvent<HTMLInputElement>) =>{
            props.setStatus(e.currentTarget.value)
    }
    return (<>
            {!props.editMode &&
        <div >
            <span onDoubleClick={()=>props.setEditMode(true)}>MY STATUS:{props.status}</span>

        </div>
            }
            {props.editMode &&
            <div>
            <input autoFocus value={props.status} onChange={(e)=>setStatus(e)} onBlur={()=>props.setEditMode(false)}/>

            </div>
            }
        </>
    )
}

export default ProfileStatus