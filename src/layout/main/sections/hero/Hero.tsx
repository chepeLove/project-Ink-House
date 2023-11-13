import React from 'react';
import style from './Hero.module.css'
import common from '../../../../common/Container.module.css'
import heroImage from '../../../../assets/heroImage.jpg'
import {Button} from "../../../../component/Button";

export const Hero = () => {
    return (
        <section>
            <div className={common.container}>
                <img className={style.heroImage} src={heroImage} alt="heroImage"/>
                <div className={style.textWrapper}>
                    <h1 className={style.title}>Реплики картин от <span className={style.titleSpan}>Ink. House</span>
                    </h1>
                    <p className={style.text}>Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие
                        произведения, доступные цены.</p>
                    <Button name={'Продукция'}/>
                </div>
            </div>
        </section>
    );
};
