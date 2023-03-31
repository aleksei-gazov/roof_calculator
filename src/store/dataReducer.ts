import {Dispatch} from 'redux'
import {dataAPI} from '../api/api';


export type InitialDataStateType = {
    type: string
    name: string
    material?: string
    unit: string
    width?: number
    thickness?: number
    price: number
}

const initialstate: InitialDataStateType[] = []
//     [
//     {
//         type: "list",
//         name: "Лист-1 0.5 ширина 1.8м",
//         material: "plastic",
//         unit: "м2",
//         width: 1.8,
//         thickness: 0.5,
//         price: 12
//     },
//     {
//         type: "list",
//         name: "Лист-2 0.5 ширина 1.5м",
//         material: "plastic",
//         unit: "м2",
//         width: 1.5,
//         thickness: 0.5,
//         price: 15
//     },
//     {
//         type: "list",
//         name: "Лист-3 0.5 ширина 1.2м",
//         material: "plastic",
//         unit: "м2",
//         width: 1.2,
//         thickness: 0.5,
//         price: 15
//     },
//     {
//         type: "list",
//         name: "Лист-4 0.7 ширина 1.8м",
//         material: "plastic",
//         unit: "м2",
//         width: 1.8,
//         thickness: 0.7,
//         price: 17
//     },
//     {
//         type: "list",
//         name: "Лист-5 0.7 ширина 1.5м",
//         material: "plastic",
//         unit: "м2",
//         width: 1.5,
//         thickness: 0.7,
//         price: 20
//     },
//     {
//         type: "list",
//         name: "Лист-6 0.7 ширина 1.2м",
//         material: "plastic",
//         unit: "м2",
//         width: 1.2,
//         thickness: 0.7,
//         price: 22
//     },
//
//     {
//         type: "list",
//         name: "Лист-7 0.3 ширина 1м",
//         material: "metal",
//         unit: "м2",
//         width: 1,
//         thickness: 0.3,
//         price: 25
//     },
//     {
//         type: "list",
//         name: "Лист-8 0.3 ширина 0.75м",
//         material: "metal",
//         unit: "м2",
//         width: 0.75,
//         thickness: 0.3,
//         price: 20
//     },
//     {
//         type: "list",
//         name: "Лист-9 0.3 ширина 0.5м",
//         material: "metal",
//         unit: "м2",
//         width: 0.5,
//         thickness: 0.3,
//         price: 15
//     },
//     {
//         type: "list",
//         name: "Лист-10 0.5 ширина 1м",
//         material: "metal",
//         unit: "м2",
//         width: 1,
//         thickness: 0.5,
//         price: 30
//     },
//     {
//         type: "list",
//         name: "Лист-11 0.5 ширина 0.75м",
//         material: "metal",
//         unit: "м2",
//         width: 0.75,
//         thickness: 0.5,
//         price: 26
//     },
//     {
//         type: "list",
//         name: "Лист-12 0.5 ширина 0.5м",
//         material: "metal",
//         unit: "м2",
//         width: 0.5,
//         thickness: 0.5,
//         price: 22
//     },
//
//     {
//         type: "pipe",
//         name: "Труба 20х20",
//         unit: "мп",
//         width: 20,
//         price: 18
//     },
//     {
//         type: "pipe",
//         name: "Труба 30х30",
//         unit: "мп",
//         width: 30,
//         price: 18
//     },
//
//     {
//         type: "fix",
//         name: "Саморез",
//         unit: "шт",
//         price: 1.1
//     }
// ]

export const dataReducer = (state = initialstate, action: any): InitialDataStateType[] => {
    switch (action.type) {
        case 'GET_PRICE':
            return state
        default: return state
    }
}

//actions
export const getPrice = (data: InitialDataStateType[]) => ({
    type: 'GET_PRICE',
    payload: {
        data
    }
})

//thunk

export const getPriceThunk = (material: string) => async(dispatch: Dispatch) => {
    try{
        let response = await dataAPI.getMaterial(material)
        dispatch(getPrice(response.data))
        console.log(response.data)
    }
    catch (e) {

    }

}