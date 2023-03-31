import { configReducer } from "./configReducer";
import { AnyAction,combineReducers, legacy_createStore, applyMiddleware } from "redux";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import thunk, {ThunkDispatch} from 'redux-thunk';
import {dataReducer} from './dataReducer';
import {totalReducer} from './totalReducer';
import {tableReducer} from './table-reducer';


const rootReducer = combineReducers ({
    config: configReducer,
    data: dataReducer,
    total: totalReducer,
    table: tableReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export type StoreType = typeof store
export type ThunkDispatchType = ThunkDispatch<StoreType, any, AnyAction>
export const useAppDispatch = () => useDispatch<ThunkDispatchType>()