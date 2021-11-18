import React, {ChangeEvent} from 'react'
import {ActionType, StateType} from "../../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialog-reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";


// type PropsDialogsType = {
//     d: Array<PropsDialogItem>
//     m: Array<{ id: number, message: string }>
//     b: string
//     dispatch: (action: ActionType) => void
// }
// const DialogsContainer = (props: PropsDialogsType) => {
//
//     const onSendMessageClick = () => {
//         let action = sendMessageCreator()
//         props.dispatch(action)
//     }
//
//     const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
//         let body = e.currentTarget.value
//         props.dispatch(updateNewMessageBodyCreator(body))
//     }
//     return (
//         <Dialogs d={props.d} m={props.m} b={props.b}
//                  onNewMessageChange={onNewMessageChange}
//                  onSendMessageClick={onSendMessageClick}/>
//
//     )
// }
let text= 'HHHHHH'
const mapStateToProps = (state:StateType) =>{
    console.log(state)
    return {
        supermessage: text      // можно добавить и св-во дополнительно попадет в пропсы Dialogs
    }
}


const mapDispatchToProps = (dispatch:(action: ActionType) => void) =>{
    return {
        onNewMessageChange:(e:ChangeEvent<HTMLTextAreaElement>)=>{
            let body = e.currentTarget.value
            dispatch(updateNewMessageBodyCreator(body))
        },
        onSendMessageClick: () => {
            let action = sendMessageCreator()
            dispatch(action)
        }
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
export default DialogsContainer