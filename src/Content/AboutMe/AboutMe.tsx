import React from 'react';
import style from "./AboutMe.module.css";
import {HeaderSection} from "../../common/components/HeaderSection";

export const AboutMe = () => {
    return (
        <div className={style.about_me}>
            <div className={style.about_me_container}>
                <div className={style.about_me_content}>
                    <HeaderSection title={"about me"} subtitle={"Know Me More"}/>
                    <div className={style.about_me_info}>
                        <div className={style.about_me_info_text}>
                            <h2>I'm Valentin Prokofev, a Frontend Developer</h2>
                            <p>I help you build brand for your business at an affordable price. Thousands of clients
                                have
                                procured exceptional results while working with our dedicated team. when an unknown
                                printer
                                took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <p>Delivering work within time and budget which meets client’s requirements is our moto.
                                Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer
                                took
                                a galley.
                            </p>
                        </div>
                        <div className={style.about_me_info_form}>
                            <ul>
                                <li><span>Name:</span>Valentin Prokofev</li>
                                <li><span>Email:</span><a
                                    href="mailto:valentin.prokofbev@gmail.com">valentin.prokofbev@gmail.com</a></li>
                                <li><span>Age:</span>34</li>
                                <li><span>From:</span>Dimytrovgrad, Ulyanovskaya oblast'</li>
                            </ul>
                            <button>Download CV</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
