import {useAppDispatch, useAppSelector} from '../../store/store';
import {TableTotal} from '../TableTotal/TableTotal';
import Button from '@mui/material/Button';
import React from 'react';
import {addBasket} from '../../store/basket-reducer';
import s from './Total.module.css'
import {selectorTotal} from './total-selector';
import { Fade } from "react-awesome-reveal";


const Total = () => {
    const dispatch = useAppDispatch()
    const total = useAppSelector(selectorTotal)

    const onBasketHandler = () => {
        dispatch(addBasket(total.total))
    }
    let totalTable
    if (total.isTotal) {
        totalTable = <>
            <p>Площадь изделия: {total.productArea}</p>
            <p>Расчетный размер ячейки: {total.cellSize[0]}m X {total.cellSize[1]}m</p>
            <TableTotal
                total={total.total}
            />
            <Button className={s.button} variant="contained" onClick={onBasketHandler}>В корзину</Button>
        </>
    }
    return (
        <div className={s.container}>
            <h1>Total</h1>
            <Fade damping = { 0.1 } direction={'right'}>
            {totalTable}
            </Fade>
        </div>
    );
};

export default Total;