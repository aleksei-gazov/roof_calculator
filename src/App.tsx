import React from 'react';
import './App.module.css';
import s from './App.module.css'
import { Basket } from './Components/Basket/Basket';
import { DataInput } from './Components/DataInput/DataInput';
import Total from './Components/Total/Total';
import {useAppDispatch, useAppSelector} from './store/store';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {isBasketAC} from './store/basket-reducer';
import { Fade } from "react-awesome-reveal";

const App = () => {
    const dispatch = useAppDispatch()
    const isBasket = useAppSelector(state=> state.basket.isBasket)
const InBasketHandler = ()=> {
    dispatch(isBasketAC(true))
}
    return (
        <div className={s.app}>
            <IconButton color="primary" aria-label="add to shopping cart" >
                <AddShoppingCartIcon onClick={InBasketHandler}/>
            </IconButton>
            {isBasket ?
                <Basket/>
                :
                <div  className={s.container}>
                    <Fade damping = { 0.7 } direction={'left'}>
                    <DataInput/>
                    </Fade>
                    <Total/>
                </div>
            }


        </div>
    );
}

export default App;
