import {Dispatch} from 'react'
import {configAIP} from '../api/api';

const initialState = {
    isInitialized: false,
    config: [] as ConfigType[]
}
export type InitialStateType = typeof initialState
export type ConfigType = {
    type: string
    key: string
    name: string
    min?: number
    max?: number
    step?: number
    value?: number
}
export const configReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'GET_CONFIG':
            return {...state, config: action.payload.config.map((t: any) => ({...t}))}
        case 'SET-IS-INITIALIZED':
            return {...state, isInitialized: action.value}
        default:
            return state
    }
}
// Actions
export const setConfig = (config: InitialStateType[]) => ({
    type: 'GET_CONFIG',
    payload: {
        config
    }
} as const)
export const setIsInitialized = (value: boolean) => ({type: 'SET-IS-INITIALIZED', value} as const)

//Thunk
export const getConfig = () => async (dispatch: Dispatch<any>) => {
    try {
        let response = await configAIP.getConfigData()
        dispatch(setConfig(response.data))
    } catch (e) {
        throw 'error'
    } finally {
        dispatch(setIsInitialized(true))
    }
}

//types
export type SetConfigType = ReturnType<typeof setConfig>
export type SetIsInitializedType = ReturnType<typeof setIsInitialized>
export type ActionType = SetConfigType | SetIsInitializedType
