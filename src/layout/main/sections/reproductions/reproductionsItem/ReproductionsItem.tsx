import React, {FC} from 'react';
import style from './ReproductionsItem.module.css'
import {Button} from "../../../../../component/Button";

type ReproductionsItemType = {
    srcCard: string
    author: string
    nameArt: string
    canvas: string
    price: string
}

export const ReproductionsItem: FC<ReproductionsItemType> = ({
                                                                 srcCard,
                                                                 author
                                                                 , nameArt,
                                                                 canvas,
                                                                 price
                                                             }) => {
    return (
        <div className={style.reproductionsItem}>
            <img className={style.imageArt} src={srcCard} alt="card-image"/>
            <h4 className={style.author}>{author}</h4>
            <h3 className={style.nameArt}>{nameArt}</h3>
            <span className={style.canvas}>{canvas}</span>
            <span className={style.price}>{price}</span>
            <Button name={'В корзину'}/>
        </div>
    );
};
