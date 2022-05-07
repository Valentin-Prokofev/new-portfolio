import React from 'react';
import style from './Sidebar.module.css'
import {Nav} from "./Navbar/Nav";
import {Avatar} from "./Avatar/Avatar";
import {Footer} from "./Footer/Footer";

export const Sidebar = () => {
    return (
        <div className={style.sidebar}>
            <Avatar/>
            <Nav/>
            <Footer/>
        </div>
    );
};
