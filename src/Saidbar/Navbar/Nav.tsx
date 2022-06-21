import React from 'react';
import style from './Nav.module.css'

// type NavPropsType = {
//     toggle: boolean
// }

export const Nav = () => {

    // let navClassName = props.toggle ? `${style.nav}` :`${style.nav_hidden}`

    return (
        <nav className={style.header_nav}>
            <ul className={style.nav_items}>
                <li className={style.nav_item}><a href="#">Home</a></li>
                <li className={style.nav_item}><a href="#">About Me</a></li>
                <li className={style.nav_item}><a href="#">What I Do</a></li>
                <li className={style.nav_item}><a href="#">Portfolio</a></li>
                <li className={style.nav_item}><a href="#">Contacts</a></li>
            </ul>
        </nav>
    );
};
