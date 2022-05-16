// _____________Problema 2________

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
const Produsalimentar = (props) => {
const [loaded, setLoaded] = useState (false);
useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 5000);
  }, []);
if (props.withLoading && !loaded) return <div>loading...</div>;
      

    return (
        <div className="denumire"> Pizza
            <div className="pret" style={{color: props.pretul}}>100 Lei </div>
            <div className="categorie" style={{borderColor: props.categoria}}> Scump </div>
            <div className="culoare" style={{backgroundColor: props.stil}}> Aqua </div>
        </div>
    );
};

Produsalimentar.prototypes = {
    stil: PropTypes.string,
    pretul: PropTypes.string,
    categoria: PropTypes.string
    
};

Produsalimentar.defaultProps = {
    stil: "black",                      // Am folosit black ca defaul properties pt toate exemplele in loc de text
    pretul: "black",                    // pentru in caz ca o proprietate (culoare in acest caz) nuexista
    categoria: "black"
};
export default Produsalimentar;