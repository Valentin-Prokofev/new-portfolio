import React from 'react';
import style from './Home.module.css'

export const Home = () => {
    return (
        <section className={style.home}>
            <div className={style.home_row}>
                <div className={style.home_content}>
                    <p className={style.home_sup_title}>Welcome</p>
                    <p className={style.home_title}><span>My Name is</span> Valentin Prokofev<span> and </span>I'm Fronted Developer</p>
                    <p className={style.home_address}>based in Montevideo, Uruguay</p>
                    <a className={style.home_btn}>Hire Me</a>
                </div>
            </div>
        </section>
    );
};

