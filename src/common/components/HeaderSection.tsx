import React from 'react';
import style from "./HeaderSection.module.css";

type HeaderSectionPropsType = {
    title: string
    subtitle: string
}

export const HeaderSection = (props: HeaderSectionPropsType) => {
    return (
        <div className={style.header_section}>
            <h2 className={style.header_section_title}>{props.title}</h2>
            <p className={style.header_section_subtitle}>{props.subtitle}</p>
        </div>
    );
};
