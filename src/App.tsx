import React from 'react';
import './App.module.css';
import Basket from './Components/Basket';
import s from './App.module.css'
import { DataInput } from './Components/DataInput';

function App() {
  return (
    <div className={s.App}>
      <DataInput/>
        {/*<hr className={s.band}/>*/}
        <Basket/>
    </div>
  );
}

export default App;
