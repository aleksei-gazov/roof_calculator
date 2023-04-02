import React from 'react';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {isBasketAC} from '../../store/basket-reducer';
import {TotalStateType} from '../../store/total-reducer';
import {TableTotal} from '../TableTotal/TableTotal';
import Button from '@mui/material/Button';
import s from './Basket.module.css'


export const Basket = () => {
    const basketTotal = useAppSelector<TotalStateType[]>(state => state.basket.basket)
    const dispatch = useAppDispatch()
    const inBasketHandler = () => {
        dispatch(isBasketAC(false))
    }
    return (
        <div>
            <TableTotal total={basketTotal}/>
            <Button className={s.button} variant="contained" onClick={inBasketHandler}>К рассчетам</Button>
        </div>
    );
}