import React, { useEffect, useState } from "react";

const Timing2 = (props) => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setTimeout(() => {
        setLoaded(true);
        }, 5000);
    }, []);
    if (props.withLoading && !loaded) return <div>loading...</div>;      
   return (
        <div>Finished loading</div>
    );
};

export default Timing2;

// aceasta componenta auta la problema 5