import React from 'react'
import s from './../dialogs.module.css'

type PropsMessage = {
    message: string
}

const Message = (props: PropsMessage) => {
    return (<div className={s.message}>{props.message}</div>
    )
}

export default Message