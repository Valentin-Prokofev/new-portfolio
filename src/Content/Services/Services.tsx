import React from 'react';
import style from "./Services.module.css";
import {Service} from "./Service/Service";


export const Services = () => {
    return (
        <div className={style.services}>
            <p className={style.services_title}>what i do</p>
            <div className={style.services_item}>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
            </div>
        </div>
    );
};
