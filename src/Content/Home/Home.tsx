import React from 'react';
import style from './Home.module.css'

export const Home = () => {
    return (
        <div className={style.home}>
            <div className={style.home_content}>
                <p className={style.title}>welcome</p>
                <h2 className={style.home_h2}>i'm Valentin Prokofev</h2>
                <h2 className={style.home_h2}>and</h2>
                <h2 className={style.home_h2}>i'm Fronted Developer</h2>
                <p className={style.home_address}>based in Montevideo, Uruguay</p>
                <button className={style.home_button}>hire me</button>
            </div>
        </div>
    );
};

