import React from 'react';
import style from "./Services.module.css";
import {Service} from "./Service/Service";
import {HeaderSection} from "../../common/components/HeaderSection";


export const Services = () => {
    return (
        <div className={style.services}>
            <div className={style.services_container}>
                <HeaderSection title={"services"} subtitle={"What I Do"}/>
                <div className={style.services_item}>
                    <Service/>
                    <Service/>
                    <Service/>
                    <Service/>
                    <Service/>
                    <Service/>
                </div>
            </div>
        </div>
    );
};
