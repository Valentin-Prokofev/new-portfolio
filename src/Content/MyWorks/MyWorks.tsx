import React from 'react';
import style from './MyWorks.module.scss'
import {HeaderSection} from "../../common/components/HeaderSection";
import card1 from "../../assets/image/myWorks/about1.jpg"
import card2 from "../../assets/image/myWorks/about2.jpg"
import card3 from "../../assets/image/myWorks/about3.jpg"
import {Work} from "./Work/Work";


export const MyWorks = () => {
    return (
        <div className={style.my_works}>
            <div className={style.my_works_container}>
                <HeaderSection title={"portfolio"} subtitle={"My Work"}/>
                <div className={style.my_works_items}>
                    <Work src={card1} alt={"card1"} name={"Todo"} description={"Typescript with Redux"}/>
                    <Work src={card2} alt={"card2"} name={"Social Network"} description={"Typescript with Redux"}/>
                    <Work src={card3} alt={"card3"} name={"Counter"} description={"Typescript with Redux"}/>
                </div>
            </div>
        </div>
    );
};
