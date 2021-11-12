import {ActionType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


type TypeMessagePage = {
    messages: Array<{ id: number, message: string }>
    newMessageBody: string
}


export const dialogReducer = (state: TypeMessagePage, action: ActionType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state

        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            // let newMessage:StateType = {...this._state,
            //     messagePage: {messages: [...this._state.messagePage.messages, {id:6,message:body}],newMessageBody:''}}
            // let newMessage:any =
            state.messages.push({id: 6, message: body})
            //console.log(newMessage)
            return state
        default:
            return state

    }
}

export const updateNewMessageBodyCreator = (text:string) =>{
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body:text,
        newText:''
    }
}
export const sendMessageCreator = () =>{
    return {
        type: SEND_MESSAGE,
        body:'',
        newText:''
    }
}



