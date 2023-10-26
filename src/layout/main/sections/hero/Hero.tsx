import React from 'react';
import style from './Hero.module.css'
import heroImage from '../../../../assets/heroImage.jpg'

export const Hero = () => {
    return (
        <section className={style.container}>
            <img className={style.heroImage} src={heroImage} alt="heroImage"/>
            <div className={style.textWrapper}>
                <h1 className={style.title}>Реплики картин от <span className={style.titleSpan}>Ink. House</span></h1>
                <p className={style.text}>Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие
                    произведения, доступные цены.</p>
                <button className={style.buttonHero}>Продукция</button>
            </div>
        </section>
    );
};
