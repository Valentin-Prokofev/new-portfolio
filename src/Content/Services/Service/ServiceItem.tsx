import React from 'react';
import style from "./ServiceItem.module.css";

type ServiceItemPropsType = {
    icon: string
    alt: string
    name: string
    description: string
}

export const ServiceItem = (props:ServiceItemPropsType) => {
    return (
        <div className={style.service_item}>
            <div className={style.service_item_position}>
                <div className={style.service_item_img}>
                    <span>
                        <img src={props.icon} alt={props.alt}/>
                    </span>
                </div>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

