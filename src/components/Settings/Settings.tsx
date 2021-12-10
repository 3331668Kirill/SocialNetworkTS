import React, {useState} from "react";
import {Modal} from "../common/Modal";
// @ts-ignore
import {saveAs} from "file-saver"


export const Settings = () =>{
    const [modalActive, setModalActive] = useState<boolean>(false)
    const [text,setText]=useState<string>('')
    const [fileName,setFileName]=useState<string>('')
    const saveFile = () => {
        const newText={name:fileName,value:text}
        let blob = new Blob([newText.value,' fileName:',newText.name], {type: "text/plain;charset=utf-8"});
        console.log(blob)
        saveAs(blob, fileName);
    }


    return (<div>
            <button style={{margin:"10px 20px", padding:"20px", fontSize:"1rem"}}
            onClick={()=>setModalActive(true)}
            > SAVE INFO IN TO FILE </button>
            <Modal active={modalActive} setActive={setModalActive}>
                {/*<form action={''}>*/}
                    <div>
                        <label> enter file name  </label>
                <input type={"text"} onChange={(e)=>{setFileName(e.target.value)}}/>
                    </div>
                    <div>
                        <label> enter text  </label>
                <input type={"text"} onChange={(e)=>{setText(e.target.value)}}/>
                    </div>
                    <button onClick={saveFile}> SAVE </button>
            {/*</form>*/}

                </Modal>


    </div>
    )
}

