import React from 'react'
import s from './../dialogs.module.css'



export type PropsDialogItem = {
    id: number
    name: string
}

const DialogItem = (props: PropsDialogItem) => {


    return (<div className={s.dialog_user}>
            <span>{props.name}</span>
        </div>
    )
}




export default DialogItem