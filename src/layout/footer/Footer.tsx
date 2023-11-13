import React from 'react';
import style from './Footer.module.css'
import common from '../../common/Container.module.css'
import logo from '../../assets/logo.svg'
import linkedin from '../../assets/linkedIn.svg'
import instagram from '../../assets/instagram.svg'
import youtube from '../../assets/youtube.svg'

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={common.container}>
                <div className={style.logoNumberWrapper}>
                    <div className={style.logoWrapper}>
                        <img src={logo} alt="logo"/>
                        <span className={style.logoText}>Ink.House</span>
                    </div>
                    <a href="#" className={style.footerNumber}>+7 (999) 543-54-54</a>
                    <a href="#" className={style.text}><span>Мастерская</span></a>
                </div>
                <div className={style.navWrapper}>
                    <div className={style.navInnerBox}>
                        <h3 className={style.footerTitle}>Репродукции</h3>
                        <a href="#" className={style.text}><span>Франция</span></a>
                        <a href="#" className={style.text}><span>Германия</span></a>
                        <a href="#" className={style.text}><span>Англия</span></a>
                    </div>
                    <div className={style.navInnerBox}>
                        <h3 className={style.footerTitle}>Новинки</h3>
                        <a href="#" className={style.text}><span>2021</span></a>
                        <a href="#" className={style.text}><span>2020</span></a>
                    </div>
                    <div className={style.navInnerBox}>
                        <h3 className={style.footerTitle}>О нас</h3>
                        <a href="#" className={style.text}><span>Художники</span></a>
                        <a href="#" className={style.text}><span>Менеджеры</span></a>
                    </div>
                </div>

                <div className={style.socialWrapper}>
                    <div className={style.messengersWrapper}>
                        <a href="#">
                            <img src={linkedin} alt="linkedin"/>
                        </a>
                        <a href="#">
                            <img src={instagram} alt="instagram"/>
                        </a>
                        <a href="#">
                            <img src={youtube} alt="youtube"/>
                        </a>
                    </div>
                    <span className={style.socialText}>Ink. House ®</span>
                    <span className={style.socialText}>All rights reserved</span>
                </div>
            </div>
        </footer>
    );
};
