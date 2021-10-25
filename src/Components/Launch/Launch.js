import React from "react";
import cl from './launch.module.scss';

const Launch = (props) => {
   // console.log(props.launch);
    let date = new Date(props.launch.net);
    const launchDate = date.toLocaleDateString();

    return(
        <div className={cl.launch}>
            <div className={cl.launch__picture} style={{backgroundImage:`url(${props.launch.image})`}}></div>
            <div className={cl.launch__info}>
                <div className={cl.launch__date}>{launchDate}</div>
                <h3 className={cl.launch__title}>{props.launch.name}</h3>
                <div className={cl.launch__status}>
                   <span className={(props.launch.status.name === 'Go for Launch') ? cl.green_badge : ''}>
                       Status: {props.launch.status.name}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Launch;