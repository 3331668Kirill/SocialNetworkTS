import React from 'react'
import s from './../dialogs.module.css'

type PropsMessageType = {
    message: string
}

const Message = (props: PropsMessageType) => {
    return (<div className={s.message}>{props.message}</div>
    )
}

export default Message