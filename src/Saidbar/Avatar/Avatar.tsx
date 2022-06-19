import React from 'react';
import style from './Avatar.module.css';
import avatar from '../../assets/image/avatar.jpg'

export const Avatar = () => {
    return (
        <div className={style.avatar}>
            <a className={style.avatar_a} href="#">
                <span className={style.avatar_span_img}>
                    <img className={style.avatar_img} src={avatar} alt="avatar"/>
                </span>
                <p className={style.avatar_header}> Valentin Prokofev</p>
            </a>
        </div>
    );
};
