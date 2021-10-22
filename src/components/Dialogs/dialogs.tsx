import React, {ReactElement} from 'react'
import s from './dialogs.module.css'
import DialogItem from "./DialogItem/dialogItem";
import Message from "./Message/message";

type PropsDialogItem = {
    id: number
    name: string
}

const Dialogs = () => {
    let dialogs: Array<PropsDialogItem> = [
        {id: 1, name: 'Dims'},
        {id: 2, name: 'Ann'},
        {id: 3, name: 'Irina'},
        {id: 4, name: 'Patrick'},
        {id: 5, name: 'Vova'}
    ]
    let messages: Array<{ id: number, message: string }> = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'How are you'},
        {id: 4, message: 'Fine'},
        {id: 5, message: 'Bye'}
    ]

    let dialogsElements: Array<ReactElement> = dialogs.map(dialogs => (
        <DialogItem name={dialogs.name} id={dialogs.id}/>))

   let messagesElements: Array<ReactElement> = messages.map(m => (<Message message={m.message}/>))

    return (
        <div className={s.dialogs}>

            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>


        </div>
    )
}

export default Dialogs