import {ActionType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


type TypeMessagePage = {
    messages: Array<{ id: number, message: string }>
    newMessageBody: string
}
let initialState =  {
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'How are you'},
        {id: 4, message: 'Fine'},
        {id: 5, message: 'Bye'}
    ],
        newMessageBody:''
}

export const dialogReducer = (state: TypeMessagePage = initialState, action: ActionType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state = {...state, newMessageBody: action.body}

            //state.newMessageBody = action.body
            return state

        case SEND_MESSAGE:
            let body = state.newMessageBody
            state = {...state, newMessageBody: ''}
            //state.newMessageBody = ''
            state = {...state, messages: [...state.messages, {id: 6, message: body}]}
            //state.messages.push({id: 6, message: body})

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



