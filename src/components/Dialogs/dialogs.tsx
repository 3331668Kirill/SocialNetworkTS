import React, {ChangeEvent, ReactElement} from 'react'
import s from './dialogs.module.css'
import DialogItem from "./DialogItem/dialogItem";
import Message from "./Message/message";


export type PropsDialogItem = {
    id: number
    name: string
}
export type PropsDialogsType = {
    d: Array<PropsDialogItem>
    m: Array<{ id: number, message: string }>
    b: string
    auth?: { id: number, email: string, login: string, isAuth: boolean }
    supermessage?: string
    onNewMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onSendMessageClick: () => void

}

const Dialogs = (props: PropsDialogsType) => {
    console.log(props)
    let dialogsElements: Array<ReactElement> = props.d.map(dialogs => (
        <DialogItem name={dialogs.name} id={dialogs.id}/>))

    let messagesElements: Array<ReactElement> = props.m.map(m => (<Message message={m.message}/>))
    const onSendMessageClick = () => {
        props.onSendMessageClick()
    }
    let newMessageBody = props.b
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onNewMessageChange(e)
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogs_items}>
                {dialogsElements}


            </div>

            <div className={s.messages}>
                <div className={s.message_block}>{messagesElements}</div>
                <div className={s.input}>
                    <div><textarea className={s.input_text} value={newMessageBody} onChange={onNewMessageChange}
                                   placeholder={'enter your message'}> </textarea></div>
                    <div>
                        <button className={s.button} onClick={onSendMessageClick}> add message</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Dialogs