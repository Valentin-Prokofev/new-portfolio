import React from 'react';
import style from './Avatar.module.css';
import avatar from '../../assets/image/avatar/1_0.jpg'

export const Avatar = () => {
    return (
        <div className={style.avatar}>
            <a className={style.avatar_a} href="#">
                <span className={style.avatar_span_img}>
                    <img className={style.avatar_img} src={avatar} alt="avatar"/>
                </span>
                <p className={style.avatar_name}>Valentin Prokofev</p>
            </a>
        </div>
    );
};
