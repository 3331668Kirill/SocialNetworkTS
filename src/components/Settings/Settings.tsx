import React, {useState} from "react";
import {Modal} from "../common/Modal";


export const Settings = () =>{
    const [modalActive, setModalActive] = useState<boolean>(false)
    return (<div>
            <button style={{margin:"10px 20px", padding:"20px", fontSize:"1rem"}}
            onClick={()=>setModalActive(true)}
            > SETTINGS </button>
            <Modal active={modalActive} setActive={setModalActive}>
                {/*<form action={''}>*/}
                    <div>
                <input type={"text"}/>
                    </div>
                    <div>
                <input type={"text"}/>
                    </div>
                    <button> SET </button>
            {/*</form>*/}

                </Modal>
    </div>
    )
}