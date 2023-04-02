import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {getConfig} from '../../store/config-reducer';
import {getPriceThunk} from '../../store/data-reducer';
import {numberOfScrews, numberOfSheets, pipeQuantity, productDimensions, sumSheets} from '../../utils/frame';
import {selectorConfig, selectorData, selectorIsInitialized} from './dataInput-selectors';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {Button, FormControl, FormGroup, FormLabel, Grid, TextField} from '@mui/material'
import s from './DataInput.module.css';


export const DataInput = () => {
    const dispatch = useAppDispatch()
    const config = useAppSelector(selectorConfig)
    const isInitialized = useAppSelector(selectorIsInitialized)
    const data = useAppSelector(selectorData)
    const [material, setMaterial] = useState('');
    const {register, handleSubmit} = useForm()
    const onSubmit = (dataForm: any) => {
        productDimensions(dataForm.roofWidth, dataForm.roofLength)
        numberOfSheets(dataForm.roofWidth, dataForm.roofLength, dataForm.sheetWidth)
        sumSheets(data.data, dataForm.sheetWidth, dataForm.thickness)
        numberOfScrews(data.fixPrice, dataForm.roofWidth, dataForm.roofLength, material)
        pipeQuantity(data.pipe, material, dataForm.roofWidth, dataForm.roofLength, 1.2, 0.3, dispatch)

    }
    let fix = 0
    if (material === 'metal') {
        config?.forEach(i => {
                if (i.key === 'metal' && i.type === 'fix') {
                    return fix = i.value
                }
            }
        )
    }
    if (material === 'plastic') {
        config?.forEach(i => {
                if (i.key === 'plastic' && i.type === 'fix') {
                    return fix = i.value
                }
            }
        )
    }
    const onSelector = (event: SelectChangeEvent) => {
        dispatch(getPriceThunk(event.target.value))
        setMaterial(event.target.value as string);
    };

    useEffect(() => {
        dispatch(getConfig())
    }, [])

    if (!isInitialized) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }
    return (
        <div className={s.container}>
            <Grid container justifyContent="left">
                <Grid item xs={20}>
                    <FormControl>
                        <FormLabel>
                            <h3>Заполните пожалуйста форму</h3>
                        </FormLabel>
                        <FormGroup>
                            <label className={s.lable}>Выберите тип покрытия: </label>
                            <Box sx={{maxWidth: 300}}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Material</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={material}
                                        label="Material"
                                        onChange={onSelector}
                                    >
                                        {config.map((i,ind) => {
                                            if (i.type === 'material') {
                                                return (
                                                    <MenuItem key={ind} value={i.key}>{i.name}</MenuItem>
                                                )
                                            }
                                        })}
                                    </Select>
                                </FormControl>
                            </Box>
                            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                                <label className={s.lable}>Выберите ширину листа: </label>
                                <Box sx={{maxWidth: 300}}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Width</InputLabel>
                                        <Select
                                            {...register('sheetWidth')}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Width"
                                        >
                                            {data.width.map((i,ind) => {
                                                return (
                                                    <MenuItem key={ind} value={i}>{i}</MenuItem>
                                                )
                                            })}
                                        </Select>
                                    </FormControl>
                                </Box>
                                <label className={s.lable}>Выберите толщину листа: </label>
                                <Box sx={{maxWidth: 300}}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Thickness</InputLabel>
                                        <Select
                                            {...register('thickness')}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Thickness"
                                        >
                                            {data.thickness.map((i, ind) => {
                                                return (
                                                    <MenuItem key={ind} value={i}>{i}</MenuItem>
                                                )
                                            })}
                                        </Select>
                                    </FormControl>
                                </Box>
                                <label className={s.lable}>Выберети тип каркаса: </label>
                                <Box sx={{maxWidth: 300}}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Frame</InputLabel>
                                        <Select
                                            {...register('frame')}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Frame"
                                        >
                                            {config.map((i, ind) => {
                                                if (i.type === 'frame') {
                                                    return (
                                                        <MenuItem key={ind} value={i.name}>{i.name}</MenuItem>
                                                    )
                                                }
                                            })}
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box sx={{maxWidth: 300}}>
                                    <FormControl fullWidth>
                                        <label className={s.lable}>Введите ширину кровли: </label>
                                        <TextField
                                            {...register('roofWidth')}
                                            id="outlined-number"
                                            label="NumberWidth"
                                            type="number"
                                            inputProps={{min: config[1]?.min, max: config[1]?.max}}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </FormControl>
                                </Box>
                                <Box sx={{maxWidth: 300}}>
                                    <FormControl fullWidth>
                                        <label className={s.lable}>Введите длинну кровли: </label>
                                        <TextField
                                            {...register('roofLength')}
                                            id="outlined-number"
                                            label="NumberLength"
                                            type="number"
                                            inputProps={{min: config[0]?.min, max: config[0]?.max}}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </FormControl>
                                </Box>
                                <Button className={s.button} type={'submit'} variant={'contained'}
                                        color={'primary'}>Рассчитать</Button>
                            </form>
                        </FormGroup>
                    </FormControl>

                </Grid>
            </Grid>
        </div>
    );
}