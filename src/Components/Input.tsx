import React from 'react';


type InpytPropsType = {
    type: string;
    min: number
    max: number
}


const Input = () => {
    return (
        <div>
            <input type={'number'} min={10} max={20} />
        </div>
    );
};

export default Input;