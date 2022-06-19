import React from 'react';
import style from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={style.nav}>
            <ul className={style.nav_items}>
                <li className={style.nav_item}><a href="#">Home</a></li>
                <li className={style.nav_item}><a href="#">About Me</a></li>
                <li className={style.nav_item}><a href="#">What I Do</a></li>
                <li className={style.nav_item}><a href="#">Portfolio</a></li>
                <li className={style.nav_item}><a href="#">Contact</a></li>
            </ul>
        </div>
    );
};
