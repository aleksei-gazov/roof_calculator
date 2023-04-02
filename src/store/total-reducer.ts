

let initialState: initialTotalStateType = {
    total: [],
    productArea: 0,
    cellSize: [],
    isTotal: false
}

export const totalReducer = (state = initialState, action: ActionType): initialTotalStateType => {
    switch (action.type) {
        case 'GET_PRICE_DATA':
            return {
                ...state, total: [action.payload.totalData, action.payload.totalFix, action.payload.totalPipe],
                productArea: action.payload.productArea,
                cellSize: [action.payload.distanceBetweenLags, action.payload.distanceBetweenTheCrate]
            }
        case 'IS_TOTAL':
            return {...state, isTotal: action.payload.value}

        default:
            return state
    }
}


//Actions
export const addTotal = (totalData: TotalStateType,
                         totalFix: TotalStateType,
                         totalPipe: TotalStateType,
                         productArea: number,
                         distanceBetweenLags: number,
                         distanceBetweenTheCrate: number) => ({
    type: 'GET_PRICE_DATA',
    payload: {
        totalData,
        totalFix,
        totalPipe,
        productArea,
        distanceBetweenLags,
        distanceBetweenTheCrate,
    }
} as const)
export const isTotalAC = (value: boolean) => ({
    type: 'IS_TOTAL',
    payload: {
        value
    }
} as const)


//types
export type TotalStateType = {
    cellSize?: string
    name: string
    unit: string
    quantity: number
    sum: number
}
export type initialTotalStateType = {
    total: TotalStateType[],
    productArea: number,
    cellSize: number[]
    isTotal: boolean
}
type GetPriceType = ReturnType<typeof addTotal>
type IsTotalACType = ReturnType<typeof isTotalAC>
type ActionType = GetPriceType | IsTotalACType