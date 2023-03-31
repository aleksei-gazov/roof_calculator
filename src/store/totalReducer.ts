import {GetPriceType} from './table-reducer';

// export type initialTotalStateType = {
//     productArea?: number
//     cellSize?: null | string
//     name?: null | string
//     unit?: null | string
//     quantity?: null | number
//     sum?: null | number
// }

let initialState: initialTotalStateType = {}
//     [{
//     productArea: 0,
//     cellSize: null,
//     name: null,
//     unit: null,
//     quantity: null,
//     sum: null,
// }]


export const totalReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD_TABLE':
            //  console.log(action.payload.tableId)
            return {
                ...state,
                [action.payload.tableId]: [action.payload.total, action.payload.total1, action.payload.total2]
            }
        default:
            return state
    }
}

// export const toGetDataAC = (total: initialTotalStateType) => ({
//     type: TotalAC.TO_GET_DATA,
//     payload: {
//         total
//     }
// })

//
// export enum TotalAC {
//     TO_GET_DATA = 'TO_GET_DATA'
// }

//types
    export enum TotalAC {
        TO_GET_DATA = 'TO_GET_DATA'
    }
    export type TotalStateType = {
        productArea?: number
        cellSize?: null | string
        name: null | string
        unit: null | string
        quantity: null | number
        sum: null | number
    }
    export type initialTotalStateType = {
        [key: string]: Array<TotalStateType>
    }
    type ActionType = GetPriceType