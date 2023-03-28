
export type initialTotalStateType = {
    productArea?: number
    cellSize?: null | string
    name?: null | string
    units?: null | string
    quantity?: null | number
    sum?: null | number
}

let initialState: initialTotalStateType[] = [{
    productArea: 0,
    cellSize: null,
    name: null,
    units: null,
    quantity: null,
    sum: null,
}]


export const totalReducer = (state = initialState, action: any) => {
    switch(action.type) {
        default: return state
    }
}

export const toGetDataAC = (total: initialTotalStateType) => ({
    type: TotalAC.TO_GET_DATA,
    payload: {
        total
    }
})


export enum TotalAC {
    TO_GET_DATA = 'TO_GET_DATA'
}