import React from 'react';
import style from './Header.module.css'
import logo from '../../assets/logo.svg'
import basket from '../../assets/basket.svg'

export const Header = () => {
    return (
        <header className={style.header}>
            <div className = {style.container}>
                <div className={style.logoWrapper}>
                    <img className={style.logoImage} src={logo} alt={'logo'}/>
                    <span className={style.logoText}>Ink.House</span>
                </div>
                <nav className={style.nav}>
                   <ul className={style.menu}>
                       <li className={style.menuItem}><a className={style.menuLink} href="#">Репродукции</a></li>
                       <li className={style.menuItem}><a className={style.menuLink} href="#">Новинки</a></li>
                       <li className={style.menuItem}><a className={style.menuLink} href="#">О нас</a></li>
                       <li><a href="#"><img className={style.basketImage} src={basket} alt="basket"/></a></li>
                   </ul>
                </nav>
            </div>
        </header>
    );
};
