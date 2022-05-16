// ___Problema 3___

import { useState } from "react";

const Name = () => {                                //Doar asa am reusit sa se schimbe la click
    const [style, setStyle] = useState("var");
    
    const changeStyle = () => {
          setStyle("var2");
    };
    return (
    <div className={style}>
        <button  onClick={changeStyle}>
        Paul
        </button>
    </div>
    );
  };
  export default Name;