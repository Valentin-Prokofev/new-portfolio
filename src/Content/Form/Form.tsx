import React from 'react';
import style from './Form.module.css'
import {HeaderSection} from "../../common/components/HeaderSection";

export const Form = () => {
    return (
        <div className={style.form}>
            <div className={style.form_container}>
                <HeaderSection title={"contact"} subtitle={"Get in Touch"}/>
                <div className={style.form_items}>
                    <div className={style.form_info}>
                        <div className={style.form_info_address}>
                            <p className={style.form_info_address_item}>asfgaerfaer</p>
                            <p className={style.form_info_address_item}>asfgaerfaer</p>
                            <p className={style.form_info_address_item}>asfgaerfaer</p>
                            <p className={style.form_info_address_item}>asfgaerfaer</p>
                            <p className={style.form_info_address_item}>asfgaerfaer</p>
                            <p className={style.form_info_address_item}>asfgaerfaer</p>
                        </div>
                        <div className={style.form_info_follow}></div>
                    </div>
                    <div className={style.forms}>
                        <h3 className={style.forms_title}>send us a note</h3>
                        <form className={style.form_main}>
                            <input type="text"/>
                            <input type="text"/>
                            <textarea></textarea>
                            <button>send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


