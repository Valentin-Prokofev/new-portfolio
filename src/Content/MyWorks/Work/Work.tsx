import React from 'react';
import style from "./Work.module.scss";

type WorkPropsType = {
    src: string
    alt: string
    name: string
    description: string
}

export const Work = (props:WorkPropsType) => {
    return (
        <div className={style.my_works_item}>
            <div className={style.my_works_item_inner}>
                <div className={style.my_works_item_inner_img}>
                    <img src={props.src} alt={props.alt}/>
                </div>
                <div className={style.my_works_item_text}>{props.name}</div>
            </div>
            <a href="#">
                <p className={style.my_works_item_description}>{props.description}</p>
            </a>
        </div>
    );
};
