import Autocomplete from '@mui/material/Autocomplete';
import React, {ChangeEvent} from 'react';
import {InitialConfigStateType} from '../store/configReducer';
import {TextField} from '@mui/material';


type SelectorPropsType = {
    data: InitialConfigStateType[]
    onSelectValue: (value: string)=> void
}


const Selector: React.FC<SelectorPropsType> = ({data, onSelectValue}) => {
    const onBlurHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        // onSelectValue(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }
// const name: any =[]
//     data.map(i=> {
//     if(i.type === 'frame') {
//         name.push(i.name)
//     }
// })
//     console.log(name)
    return (
        <div>
            {/*<Autocomplete*/}
            {/*    onChange={onBlurHandler}*/}
            {/*    disablePortal*/}
            {/*    id="combo-box-demo"*/}
            {/*    options={name}*/}
            {/*    sx={{ width: 300 }}*/}
            {/*    renderInput={(params) => <TextField {...params} label="Choose" />}*/}
            {/*/>*/}
            <select onChange={onBlurHandler} >
                {data.map(i=> {
                    if(i.type === 'frame') {
                        return (
                            <option  value={i.name} >{i.name}</option>
                        )
                    }
                })}
            </select>
        </div>
    );
};

export default Selector;

