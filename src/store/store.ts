
import { configReducer } from "./configReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {combineReducers, legacy_createStore} from 'redux';

const rootReducer = combineReducers ({
    data: configReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector