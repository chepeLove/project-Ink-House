import React from 'react';
import style from "./Reproductions.module.css";
import card1 from '../../../../assets/card-art-1.jpg'
import card2 from '../../../../assets/card-art-2.jpg'
import card3 from '../../../../assets/card-art-3.jpg'
import card4 from '../../../../assets/card-art-4.jpg'
import card5 from '../../../../assets/card-art-5.jpg'
import card6 from '../../../../assets/card-art-6.jpg'
import {ReproductionsItem} from "./reproductionsItem/ReproductionsItem";

export const Reproductions = () => {
    return (
        <section className={style.container}>
              <h2 className={style.reproductionsTitle}>Репродукции</h2>
               <div className={style.WrapperButtons}>
                   <button className={style.reproductionsButton}>Франция</button>
                   <button className={style.reproductionsButton}>Германия</button>
                   <button className={style.reproductionsButton}>Англия</button>
               </div>
                <div className={style.reproductionsItems}>
                    <ReproductionsItem srcCard={card1}
                                       author={"Марсель Руссо"}
                                       nameArt={'Охота Амура'}
                                       canvas={'Холст, масло (50х80)'}
                                       price={'14 500 руб'}
                    />
                    <ReproductionsItem srcCard={card2}
                                       author={'Анри Селин'}
                                       nameArt={'Дама с собачкой'}
                                       canvas={'Акрил, бумага (50х80) '}
                                       price={'16 500 руб'}
                    />
                    <ReproductionsItem srcCard={card3}
                                       author={'Франсуа Дюпон'}
                                       nameArt={'Процедура'}
                                       canvas={'Цветная литография (40х60) '}
                                       price={'20 000 руб'}
                    />
                    <ReproductionsItem srcCard={card4}
                                       author={'Луи Детуш'}
                                       nameArt={'Роза'}
                                       canvas={'Бумага, акрил (50х80) '}
                                       price={'12 000 руб'}
                    />
                    <ReproductionsItem srcCard={card5}
                                       author={'Франсуа Дюпон'}
                                       nameArt={'Птичья трапеза'}
                                       canvas={'Цветная литография (40х60) '}
                                       price={'22 500 руб'}
                    />
                    <ReproductionsItem srcCard={card6}
                                       author={'Пьер Моранж'}
                                       nameArt={'Пейзаж с рыбой'}
                                       canvas={'Цветная литография (40х60) '}
                                       price={'20 000 руб'}
                    />
                </div>
        </section>
    );
};
