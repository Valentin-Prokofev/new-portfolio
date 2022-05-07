import React from 'react';
import style from './MyWorks.module.css'


export const MyWorks = () => {
    return (
        <div className={style.my_works}>
            <h2 className={style.my_works_title}>my works</h2>
            <div className={style.my_works_items}>
                <div className={style.my_works_item}>
                    <img src="" alt=""/>
                    <h3>Name</h3>
                    <p>Description</p>
                </div>
                <div className={style.my_works_item}>
                    <img src="" alt=""/>
                    <h3>Name</h3>
                    <p>Description</p>
                </div>
            </div>
        </div>
    );
};
