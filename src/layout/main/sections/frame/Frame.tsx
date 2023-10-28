import React from 'react';
import style from './Frame.module.css'
import frameImage from '../../../../assets/frame.jpg'
import armImage from '../../../../assets/arm.png'
import avatar1 from '../../../../assets/avatar1.svg'
import avatar2 from '../../../../assets/avatar2.svg'
import avatar3 from '../../../../assets/avatar3.svg'

export const Frame = () => {
    return (
        <section className={style.frame}>
            <div className={style.container}>
                <div className={style.imageWrapper}>
                    <img className={style.frameImage} src={frameImage} alt="frame"/>
                    <img  className={style.armImage} src={armImage} alt="arm"/>
                </div>
                <div className={style.textWrapper}>
                    <h2 className={style.frameTitle}>Наша команда</h2>
                    <p className={style.text}>
                        Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить
                        значение экспериментов, поражающих по своей масштабности и грандиозности.
                        Мы вынуждены отталкиваться от того, что консультация с широким активом.
                    </p>
                    <div className={style.avatarWrapper}>
                        <img className={style.avatar} src={avatar1} alt="avatar"/>
                        <img className={style.avatar} src={avatar2} alt="avatar"/>
                        <img className={style.avatar} src={avatar3} alt="avatar"/>
                    </div>
                </div>
            </div>
        </section>
    );
};
