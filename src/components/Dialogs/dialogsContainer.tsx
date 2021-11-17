import React, {ChangeEvent} from 'react'
import {ActionType} from "../../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialog-reducer";
import Dialogs from "./dialogs";

export type PropsDialogItem = {
    id: number
    name: string
}
type PropsDialogsType = {
    d: Array<PropsDialogItem>
    m: Array<{ id: number, message: string }>
    b: string
    dispatch: (action: ActionType) => void
}
const DialogsContainer = (props: PropsDialogsType) => {

    const onSendMessageClick = () => {
        let action = sendMessageCreator()
        props.dispatch(action)
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <Dialogs d={props.d} m={props.m} b={props.b}
                 onNewMessageChange={onNewMessageChange}
                 onSendMessageClick={onSendMessageClick}/>

    )
}

export default DialogsContainer