import { useState } from 'react';
import '../css/Userlist.css';

function Userlist () {
  const [trayStatus, setTrayStatus] = useState("open");
  const [button, setButton] = useState("o");

  function onButtonClicked() {
    // ex01 filling logic here
    

    if(trayStatus=="open"){
      setTrayStatus("close")
      setButton("x");

    }
    else{
      setTrayStatus("open")
      setButton("o");
    }
    
  }

  return (
    <div className={"userlist "+trayStatus}>
      <div className="close-button" onClick={onButtonClicked}>{button}</div>
    </div>
  )
}

export default Userlist;