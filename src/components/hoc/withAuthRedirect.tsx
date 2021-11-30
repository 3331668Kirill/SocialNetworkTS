import {Redirect} from "react-router-dom";
import React from "react";

export const WithAuthRedirect = (Component:any)=> {

    return (props: any) => {

        console.log(props)
        if (!props.auth) {
            return <Redirect to={'/login'}/>
        }
        return <Component {...props}/>
    }
}