import React from 'react';
import style from './Avatar.module.css';
import avatar from '../../image/avatar.jpg'

export const Avatar = () => {
    return (
        <div className={style.avatar}>
            <div>
                <img className={style.avatar_img} src={avatar} alt="avatar"/>
            </div>
            <span>Name</span>
        </div>
    );
};
