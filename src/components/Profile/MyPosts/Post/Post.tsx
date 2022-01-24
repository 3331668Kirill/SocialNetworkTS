import React from "react";
import s from './Post.module.css'
import {ActionType} from "../../../../redux/store";

export type PropsPostType = {
    message: string
    id?: number
    likesCount: number

   }

const Post = (props: PropsPostType) => {
    return (
        <div>

            <div className={s.item}>
                <img src={'https://www.meme-arsenal.com/memes/87d4bfeed251dba0ce946e9e594dbdb6.jpg'}/>
                {props.message}

            </div>


        </div>
    )
}

export default Post