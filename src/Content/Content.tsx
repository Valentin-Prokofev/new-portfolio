import React from 'react';
import style from './Content.module.css'
import {Home} from "./Home/Home";
import {AboutMe} from "./AboutMe/AboutMe";
import {Services} from "./Services/Services";
import {MyWorks} from "./MyWorks/MyWorks";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";
import {Header} from "./Header/Header";

type ContentPropsType = {
    changeToggle: () => void
    toggle: boolean
}

export const Content = (props: ContentPropsType) => {
    return (
        <div className={style.content}>
            <Header changeToggle={props.changeToggle} toggle={props.toggle}/>
            <Home/>
            <AboutMe/>
            <Services/>
            <MyWorks/>
            <Contacts/>
            <Footer/>
        </div>
    );
};

