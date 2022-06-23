import React from 'react';
import style from './Contacts.module.css'
import {HeaderSection} from "../../common/components/HeaderSection";
import vk_icon from "../../assets/image/social_icons/icons8-vk-com.svg";
import github_icon from "../../assets/image/social_icons/icons8-github.svg";
import facebook_icon from "../../assets/image/social_icons/icons8-facebook.svg";
import instagram_icon from "../../assets/image/social_icons/icons8-instagram.svg";
import mail from "../../assets/image/contacts/mail-svgrepo-com (1).svg";
import phone from "../../assets/image/contacts/phone-svgrepo-com.svg";

export const Contacts = () => {
    return (
        <section className={style.form}>
            <div className={style.form_container}>
                <HeaderSection title={"contact"} subtitle={"Get in Touch"}/>
                <div className={style.form_items}>
                    <div className={style.form_info}>
                        <h2>address</h2>
                        <p className={style.form_info_p_address}>
                            <span>Red Square 1</span>
                            <span>Moscow</span>
                            <span>Russia</span>
                        </p>
                        <p>
                            <span>
                                <img className={style.phone_svg} src={phone} alt="tel"/>
                                7(925) 223 65 54</span>
                        </p>
                        <p>
                            <span className={style.form_info_email}>
                                <img className={style.mail_svg} src={mail} alt="mail"/>
                                valentin.prokofbev@gmail.com</span>
                        </p>
                        <h2>follow</h2>
                        <ul className={style.follow}>
                            <li><a className={style.vk_icon} href="#"><img src={vk_icon} alt="vk"/></a></li>
                            <li><a href="#"><img src={github_icon} alt="github"/></a></li>
                            <li><a href="#"><img src={facebook_icon} alt="facebook"/></a></li>
                            <li><a href="#"><img src={instagram_icon} alt="instagram"/></a></li>
                        </ul>
                    </div>
                    <div className={style.forms}>
                        <h2 className={style.forms_title}>send us a note</h2>
                        <form className={style.forms_main}>
                            <div className={style.forms_flex}>
                                <div className={style.form_name_input}><input className={style.form_control}
                                                                              name={"Name"} type="text"
                                                                              placeholder={"Name"}/></div>
                                <div className={style.form_email_input}><input className={style.form_control}
                                                                               name={"Email"} type="email"
                                                                               placeholder={"Email"}/></div>
                                <div className={style.form_textarea_input}>
                                    <textarea
                                        className={style.form_control}
                                        name="form-message"
                                        placeholder={"Tell us more about your needs........"}/>
                                </div>
                            </div>
                            <p className={style.form_p_btn}>
                                <button className={style.form_btn}>Send Message</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};


