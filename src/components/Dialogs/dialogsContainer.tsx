import React, {ChangeEvent} from 'react'
import {ActionType, StateType} from "../../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialog-reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";



let text= 'HHHHHH'

const mapStateToProps:any = (state:StateType) =>{
    console.log(state)
    return {
        d:state.profilePage.dialogs,
        m:state.messagePage.messages,
        b:state.messagePage.newMessageBody,
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