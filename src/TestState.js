import { useState } from "react";
import "./TestState.css";

function Teststate(){
    const [size, setSize] = useState("small")

    function chageSize(){
        if(size==="small"){
            setSize("medium");
        }
        if(size==="medium"){
            setSize("large");
        }
        if(size==="large"){
            setSize("small")
        }
    }

    return( //Render
        
        <div>
            <input type="button" value="Click me" onClick={chageSize}/>
            <div className={"circle "+size}/>
        </div>

    )

}

export default Teststate;