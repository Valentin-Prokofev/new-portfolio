import React from 'react';
import style from "./Header.module.css"
import vk_icon from "../../assets/image/social_icons/icons8-vk-com.svg"
import github_icon from "../../assets/image/social_icons/icons8-github.svg"
import facebook_icon from "../../assets/image/social_icons/icons8-facebook.svg"
import instagram_icon from "../../assets/image/social_icons/icons8-instagram.svg"
import {Nav} from "../../Saidbar/Navbar/Nav";

type HeaderPropsType = {
    changeToggle: () => void
    toggle: boolean
}

export const Header = (props: HeaderPropsType) => {

    let buttonClassName = props.toggle ? `${style.nav_toggle}` : `${style.nav_toggle} ${style.active}`

    return (
        <div className={style.header}>
            <a href={"#"} className={style.header_logo}>
                <span>Valentin Prokofev</span>
            </a>
            <div className={style.icons}>
                <a href={"#"}><img className={style.vk_icon} src={vk_icon} alt="vk"/></a>
                <a href="#"><img className={style.vk_icon} src={github_icon} alt="github"/></a>
                <a href="#"><img className={style.vk_icon} src={facebook_icon} alt="facebook"/></a>
                <a href="#"><img className={style.vk_icon} src={instagram_icon} alt="instagram"/></a>
            </div>
            <button className={buttonClassName} type="button" onClick={props.changeToggle}>
                <span className={style.nav_toggle_item}>Menu</span>
            </button>
            <Nav toggle={props.toggle}/>
        </div>
    );
};
