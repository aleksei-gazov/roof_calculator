import {TotalStateType} from './total-reducer'

let initialState: InitialBasketStateType = {
    basket: [],
    isBasket: false,
}


export const basketReducer = (state = initialState, action: ActionType): InitialBasketStateType => {
    switch (action.type) {
        case 'ADD_BASKET':
            const newBlock = JSON.parse(JSON.stringify(action.payload.total));
            return {...state, basket: [...state.basket, ...newBlock]};
        case BasketAC.IS_BASKET:
            return {...state, isBasket: action.value}
        default:
            return state
    }
}

//Actions
export const addBasket = (total: TotalStateType[]) => ({
    type: 'ADD_BASKET',
    payload: {
        total
    }
} as const)
export const isBasketAC = (value: boolean) => ({
    type: BasketAC.IS_BASKET,
    value
} as const)

//types
export enum BasketAC {
    ADD_BASKET = 'ADD_BASKET',
    IS_BASKET = 'IS_BASKET'
}

export type InitialBasketStateType = {
    basket: TotalStateType[]
    isBasket: boolean
}
export type AddBasket = ReturnType<typeof addBasket>
export type IsBasket = ReturnType<typeof isBasketAC>
type ActionType = AddBasket | IsBasket