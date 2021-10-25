import React from "react";
import cl from './paginationButton.module.scss';

const PaginationButton = (props) => {
    return(
        <button className={cl.button}>{props.children}</button>
    );
}

export default PaginationButton;