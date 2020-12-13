import React from "react";
import preLoader from '../../assets/images/preLoader.svg'

let Preloader = (props) => {
    return <div style={{background: 'white'}}>
        <img src={preLoader}/>
    </div>
}

export default Preloader;