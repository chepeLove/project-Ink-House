import React, {FC} from 'react';
import style from './Button.module.css'

type ButtonPropsType = {
    name:string
}
export const Button:FC<ButtonPropsType> = ({name}) => {
    return (
        <>
            <button className={style.buttonPrimary}>{name}</button>
        </>
    );
};
