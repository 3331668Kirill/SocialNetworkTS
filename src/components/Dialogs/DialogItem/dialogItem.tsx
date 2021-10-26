import React from 'react'
import s from './../dialogs.module.css'
import {NavLink} from "react-router-dom"

export type PropsDialogItem = {
    id: number
    name: string
}

const DialogItem = (props: PropsDialogItem) => {
    let path = '/messages/' + props.id

    return (<div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}




export default DialogItem