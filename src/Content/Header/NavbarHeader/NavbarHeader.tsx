import React from 'react';
import style from "./NavbarHeader.module.css"


export const NavbarHeader = () => {
    return (
        <div className={style.header_nav}>
            <ul className={style.navbar_nav}>
                <li className={style.nav_item}>
                    <a className={style.nav_link} href="#">Home</a>
                </li>
                <li className={style.nav_item}>
                    <a className={style.nav_link} href="#">About Me</a>
                </li>
                <li className={style.nav_item}>
                    <a className={style.nav_link} href="#">What I Do</a>
                </li>
                <li className={style.nav_item}>
                    <a className={style.nav_link} href="#">Portfolio</a>
                </li>
                <li className={style.nav_item}>
                    <a className={style.nav_link} href="#">Contacts</a>
                </li>
            </ul>
        </div>
    );
};

