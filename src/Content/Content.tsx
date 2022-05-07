import React from 'react';
import style from './Content.module.css'
import {Home} from "./Home/Home";
import {AboutMe} from "./AboutMe/AboutMe";
import {Services} from "./Services/Services";
import {MyWorks} from "../MyWorks/MyWorks";
import {Form} from "./Form/Form";
import {Footer} from "./Footer/Footer";


export const Content = () => {
    return (
        <div className={style.content}>
            <Home/>
            <AboutMe/>
            <Services/>
            <MyWorks/>
            <Form/>
            <Footer/>
        </div>
    );
};

