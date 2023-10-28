import React from 'react';
import backgroundImage from '../../../../assets/promo-backgraund.jpg'
import style from './Promo.module.css'
import starLogo from '../../../../assets/star-promo.svg'

export const Promo = () => {
    return (
        <section className={style.promo}>
            <img className={style.backgroundImage} src={backgroundImage} alt="photo"/>
            <div className={style.container}>
                <div className={style.wrapperContent}>
                    <div className={style.titleWrapper}>
                        <img src={starLogo} alt="logo"/>
                        <h2 className={style.promoTitle}>Новая коллекция французских авторов</h2>
                    </div>
                    <div className={style.promoTextWrapper}>
                        <p className={style.promoText}>
                            Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям,
                            которые, в свою очередь, должны быть заблокированы в рамках своих собственных
                            рациональных ограничений.
                        </p>
                        <p className={style.promoText}>
                            Принимая во внимание показатели успешности,
                            граница обучения кадров предопределяет высокую востребованность
                            направлений прогрессивного развития.
                        </p>
                    </div>
                    <button className={style.promoButton}>Ознакомиться</button>
                </div>
            </div>
    </section>

    );
};
