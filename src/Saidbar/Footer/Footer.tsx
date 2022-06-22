import React from 'react';
import style from './Footer.module.css'
import vk_icon from "../../assets/image/social_icons/icons8-vk-com.svg";
import github_icon from "../../assets/image/social_icons/icons8-github.svg";
import facebook_icon from "../../assets/image/social_icons/icons8-facebook.svg";
import instagram_icon from "../../assets/image/social_icons/icons8-instagram.svg";

export const Footer = () => {
    return (
        <div className={style.footer}>
                <a href={"#"}><img className={style.vk_icon} src={vk_icon} alt="vk"/></a>
                <a href="#"><img className={style.vk_icon} src={github_icon} alt="github"/></a>
                <a href="#"><img className={style.vk_icon} src={facebook_icon} alt="facebook"/></a>
                <a href="#"><img className={style.vk_icon} src={instagram_icon} alt="instagram"/></a>
        </div>
    );
};
