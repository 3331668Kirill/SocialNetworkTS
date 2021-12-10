import React from "react";
import logo from './spinning-circles.svg'

type PreloaderType = {
    isFetching:boolean
}

export const Preloader = (props:PreloaderType) => {


    return(<div>
            {props.isFetching ? <img style={{width:'50px', height:'50px'}}
                                          src={logo}/> : null}
        </div>
    )
}