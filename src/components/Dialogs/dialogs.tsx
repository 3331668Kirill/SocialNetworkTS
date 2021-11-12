import React, {ReactElement} from 'react'
import s from './dialogs.module.css'
import DialogItem from "./DialogItem/dialogItem";
import Message from "./Message/message";
import {ActionType} from "../../redux/state";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialog-reducer";

export type PropsDialogItem = {
    id: number
    name: string
}
type PropsDialogsType = {
    d: Array<PropsDialogItem>
    m: Array<{ id: number, message: string }>
    b:string
    dispatch:(action:ActionType)=>void
}
const Dialogs = (props: PropsDialogsType) => {


    let dialogsElements: Array<ReactElement> = props.d.map(dialogs => (
        <DialogItem name={dialogs.name} id={dialogs.id}/>))

    let messagesElements: Array<ReactElement> = props.m.map(m => (<Message message={m.message}/>))
    const onSendMessageClick = () => {
        let action = sendMessageCreator()
        props.dispatch(action)

    }
    let newMessageBody = props.b
    const onNewMessageChange =(e:any)=>{
        let body = e.target.value
        props.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <div className={s.dialogs}>

            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder={'enter your message'}> </textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}> add message</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Dialogs