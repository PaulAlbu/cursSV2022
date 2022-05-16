// ______Problema 1 ____ + celelalte componenete de la alte exercitii

import Produsalimentar from "./pb.2";
import Name from "./pb3";
import Example4 from "./pb4";

export const Exercitiu1 =() => {
    return (
    <div className="edit-pb1">
        Exercitiu 1:
        <div><br></br></div>
        <Produsalimentar stil="Aqua" pretul="Blue" categoria="Red"></Produsalimentar>
    </div>
    );
};

export const Exercitiu2 =() => {
    return (
        <div className="edit-pb1">Exercitiu 2
        <br>
        </br>
        <Name></Name>
        </div>
    )
};


export const Exercitiu3 =() => {
    return( 
    <div className="edit-pb1">Exercitiu 3
    <br></br>
    <Example4></Example4>
    </div>
    )
};

export const Exercitiu4 =() => {
    return <div className="edit-pb1">Exercitiu 4</div>
};

