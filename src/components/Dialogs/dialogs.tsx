import React, {ReactElement} from 'react'
import s from './dialogs.module.css'
import DialogItem from "./DialogItem/dialogItem";
import Message from "./Message/message";

export type PropsDialogItem = {
    id: number
    name: string
}
type PropsDialogsType = {
    d:Array<PropsDialogItem>
    m:Array<{ id: number, message: string }>
}
const Dialogs = (props:PropsDialogsType) => {


    let dialogsElements: Array<ReactElement> = props.d.map(dialogs => (
        <DialogItem name={dialogs.name} id={dialogs.id}/>))

   let messagesElements: Array<ReactElement> = props.m.map(m => (<Message message={m.message}/>))

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