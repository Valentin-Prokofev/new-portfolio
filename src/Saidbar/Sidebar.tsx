import React from 'react';
import style from './Sidebar.module.css'
import {Nav} from "./Navbar/Nav";
import {Avatar} from "./Avatar/Avatar";
import {Footer} from "./Footer/Footer";

type SidebarPropsType = {
    toggle: boolean
}


export const Sidebar = (props: SidebarPropsType) => {
    return (
        <div className={style.sidebar}>
            <Avatar/>
            <Nav toggle={props.toggle}/>
            <Footer/>
        </div>
    );
};
