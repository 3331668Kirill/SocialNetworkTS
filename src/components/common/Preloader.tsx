import React from "react";

type PreloaderType = {
    isFetching:boolean
}

export const Preloader = (props:PreloaderType) => {


    return(<div>
            {props.isFetching ? <img style={{width:'30px', height:'30px'}}
                                          src={'http://cdn.onlinewebfonts.com/svg/download_332498.png'}/> : null}
        </div>
    )
}