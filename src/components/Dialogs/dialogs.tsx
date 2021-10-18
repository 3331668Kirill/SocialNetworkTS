import React from 'react'
import s from './dialogs.module.css'
import {NavLink} from "react-router-dom"

type PropsDialogItem = {
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
type PropsMessage = {
    message: string
}

const Message = (props: PropsMessage) => {
    return (<div className={s.message}>{props.message}</div>
    )
}


const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Dims'},
        {id: 2, name: 'Ann'},
        {id: 3, name: 'Irina'},
        {id: 4, name: 'Patrick'},
        {id: 5, name: 'Vova'}
    ]
    let messagesData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'How are you'},
        {id: 4, message: 'Fine'},
        {id: 5, message: 'Bye'}
    ]


    return (
        <div className={s.dialogs}>

            <div className={s.dialogs_items}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>

            </div>


        </div>
    )
}

export default Dialogs