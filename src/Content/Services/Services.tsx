import React from 'react';
import style from "./Services.module.css";
import {ServiceItem} from "./Service/ServiceItem";
import {HeaderSection} from "../../common/components/HeaderSection";
import html_css_icon from "../../assets/image/services/html_css_icon.svg"
import react from "../../assets/image/services/react_icon.svg"
import typescript from "../../assets/image/services/icons8-typescript.svg"
import ux_ui_design from "../../assets/image/services/design_icon1.svg"
import test from "../../assets/image/services/test_icon.svg"
import support from "../../assets/image/services/computer_icon.svg"

let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."

export const Services = () => {
    return (
        <section className={style.services}>
            <div className={style.services_container}>
                <HeaderSection title={"services"} subtitle={"What I Do"}/>
                <div className={style.services_items_container}>
                    <div className={style.services_items_container_flex}>
                        <div className={style.services_items_container}>
                            <ServiceItem
                                icon={react}
                                alt={"RectJS"}
                                name={"RectJS"}
                                description={description}/>
                            <ServiceItem
                                icon={typescript}
                                alt={"TypeScript"}
                                name={"TypeScript"}
                                description={description}/>
                            <ServiceItem
                                icon={ux_ui_design}
                                alt={"UI/UX Design"}
                                name={"UI/UX Design"}
                                description={description}/>
                            <ServiceItem
                                icon={test}
                                alt={"Test"}
                                name={"Tests"}
                                description={description}/>
                            <ServiceItem
                                icon={support}
                                alt={"support"}
                                name={"Service Support"}
                                description={description}/>
                            <ServiceItem
                                icon={html_css_icon}
                                alt={"html/css"}
                                name={"CSS/HTML"}
                                description={description}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
