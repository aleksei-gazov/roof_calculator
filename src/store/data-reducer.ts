import {Dispatch} from 'redux'
import {dataAPI} from '../api/api';

const initialstate = {
    data: [] as DataType[],
    fixPrice: {} as FixType,
    pipe: [] as PipeType[],
    width: [] as Array<number | undefined>,
    thickness: [] as Array<number | undefined>
}
export type InitialDataStateType = typeof initialstate


export const dataReducer = (state = initialstate, action: ActionType): InitialDataStateType => {
    switch (action.type) {
        case 'GET_PRICE':
            const width = [...new Set(action.payload.data.map(i => i.width))]
            const thickness = [...new Set(action.payload.data.map(i => i.thickness))]
            return {
                data: action.payload.data,
                fixPrice: action.payload.fix,
                pipe: action.payload.pipe,
                width: width,
                thickness: thickness
            }
        default:
            return state
    }
}

//actions
export const getPrice = (data: DataType[], fix: FixType, pipe: PipeType[]) => ({
    type: 'GET_PRICE',
    payload: {
        data,
        fix,
        pipe,
    }
} as const)

//thunk
export const getPriceThunk = (material: string) => async (dispatch: Dispatch) => {
    try {
        let response = await Promise.all([
            dataAPI.getMaterial(material),
            dataAPI.getFixMaterial(),
            dataAPI.getPipeMaterial(),
        ])
        dispatch(getPrice(response[0].data, response[1].data[0], response[2].data))
    } catch (e) {
        throw 'error'
    }
}

//types
export type DataType = {
    type: string
    name: string
    material?: string
    unit: string
    width?: number
    thickness?: number
    price: number
}
export type FixType = {
    type: string
    name: string
    unit: string
    price: number
}
export type PipeType = {
    type: string
    name: string
    unit: string
    width: number
    price: number
}
type GetPriceType = ReturnType<typeof getPrice>
export type ActionType = GetPriceType