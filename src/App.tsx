import React from 'react';
import logo from './logo.svg';
import './App.module.css';
import DataInput from './Components/DataInput';
import Basket from './Components/Basket';
import s from './App.module.css'

function App() {
  return (
    <div className={s.App}>
      <DataInput/>
        <hr className={s.band}/>
        <Basket/>
    </div>
  );
}

export default App;
