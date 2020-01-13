import React from 'react';
import preLoader from "../../../assets/img/preLoader.gif";



const Preloader = (props) => {
    return (
        <div>
            <img src={preLoader}  alt=""/>
        </div>
    );
};

export default Preloader;