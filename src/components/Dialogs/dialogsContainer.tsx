import React, {ChangeEvent} from 'react'
import {ActionType} from "../../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialog-reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux"
import {WithAuthRedirect} from "../hoc/withAuthRedirect";


let text= 'HHHHHH'

const mapStateToProps:any = (state:AppStateType) =>{
    console.log(state.authPage)
    return {
        d:state.profilePage.dialogs,
        m:state.messagePage.messages,
        b:state.messagePage.newMessageBody,
        auth:state.authPage.data,
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
// const DialogsContainer = compose (
//     connect(mapStateToProps,mapDispatchToProps),
//     WithAuthRedirect
// )(Dialogs)

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(WithAuthRedirect (Dialogs))
export default DialogsContainer