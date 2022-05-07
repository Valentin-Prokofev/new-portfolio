import React from 'react';
import style from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={style.nav}>
            <ul className={style.nav_items}>
                <li className={style.nav_item}><a href="#">home</a></li>
                <li className={style.nav_item}><a href="#">about me</a></li>
                <li className={style.nav_item}><a href="#">what i do</a></li>
                <li className={style.nav_item}><a href="#">resume</a></li>
                <li className={style.nav_item}><a href="#">portfolio</a></li>
                <li className={style.nav_item}><a href="#">testimonial</a></li>
                <li className={style.nav_item}><a href="#">contact</a></li>
            </ul>
        </div>
    );
};
