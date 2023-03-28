import React, {ChangeEvent} from 'react';
import {useForm} from 'react-hook-form';
 import { productDimensions, numberOfSheets, numberOfScrews, pipeQuantity } from '../utils/frame';
import {useAppDispatch, useAppSelector} from '../store/store';
import {getPriceThunk, InitialDataStateType} from '../store/dataReducer';
import {getConfig, InitialStateType} from '../store/configReducer';
import s from './DataInput.module.css'


//https://stackblitz.com/edit/react-hook-form-typescript?file=App.tsx

export const DataInput = () => {
    const dispatch = useAppDispatch()
    const config = useAppSelector<InitialStateType[]>(state=> state.config)
    const data = useAppSelector<InitialDataStateType[]>(state=> state.data)
    const [materiallFilter, setMateriallFilter] = React.useState('')
    const { register, handleSubmit } = useForm()
    const onSubmit = (data: any) => {
        console.log('data: ', data)
        productDimensions(data.roofWidth, data.roofLength)
        numberOfSheets(data.roofWidth, data.roofLength, data.sheetWidth, )
        numberOfScrews(data.roofWidth, data.roofLength, materiallFilter, config)
        pipeQuantity(data.roofWidth, data.roofLength, 1.2, 0.3)
    }
    const onSelector = (e: ChangeEvent<HTMLSelectElement>) => {
        setMateriallFilter(e.currentTarget.value)
        dispatch(getPriceThunk(e.currentTarget.value))
    }
    console.log(materiallFilter)



    React.useEffect(()=>{
        dispatch(getConfig())
    },[])

    // if (config?.length <= 0){
    //     return <div>Error</div>
    // }


    return (
        <div className={s.container}>
            <div>
                <label>Выберите тип покрытия:   </label>
                <select onChange={onSelector}>
                    <option  value={'plastic'} >Пластик</option>
                    <option  value={'metal'} >Металл</option>
                </select>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Выберите ширину листа:   </label>
                    <select  {...register('sheetWidth')}>
                        {data.map(i=> {
                            if(i.material === materiallFilter) {
                                return (
                                    <option  value={i. width} >{i. width}</option>
                                )}
                        })}
                    </select>
                </div>
                <div>
                    <label>Выберите толщину листа:   </label>
                    <select  {...register('thickness')}>
                        {data.map(i=> {
                            if(i.material === materiallFilter) {
                                return (
                                    <option  value={i.thickness} >{i.thickness}</option>
                                )}
                        })}
                    </select>
                </div>
                <div>
                    <label>Выберети тип каркаса:   </label>
                    <select  {...register('frame')}>
                        {config.map(i=> {
                            if(i.type === 'frame') {
                                return (
                                    <option  value={i.name} >{i.name}</option>
                                )
                            }
                        })}
                    </select>
                </div>
                <div>
                    <label>Выберети размер трубы:   </label>
                    <select  {...register('pipeSize')}>
                        {data.map(i=> {
                            if(i.type === "pipe") {
                                return (
                                    <option  value={i.name} >{i.name}</option>
                                )
                            }
                        })}
                    </select>
                </div>
                <div>
                    <label>Ширина  </label>
                    <input
                        type="number"
                        min={config[1]?.min}
                        max={config[1]?.max}
                        {...register('roofWidth')}
                    />
                </div>
                <div>
                    <label>Длинна </label>
                    <input
                        type="number"
                        min={config[0]?.min}
                        max={config[0]?.max}
                        {...register('roofLength')}
                    />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
            {/* <div>
      <span>Выберети тип покрытия:</span> <Selector data={data} onSelectValue={onSelectValue}/>
      </div>  */}
            {/* <Input />
    <Input/>
    <Selector data={data} onSelectValue={onSelectValue}/> */}
        </div>
    );
}