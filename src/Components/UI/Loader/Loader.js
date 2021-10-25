import React from "react";
import cl from './loader.module.scss';

const Loader = () => {
    return(
        <div className={cl.loader}>
            <span></span>
        </div>
    );
}

export default Loader;