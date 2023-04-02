import {configReducer} from './config-reducer';
import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {totalReducer} from './total-reducer';
import {dataReducer} from './data-reducer';
import {basketReducer} from './basket-reducer';


const rootReducer = combineReducers({
    config: configReducer,
    data: dataReducer,
    total: totalReducer,
    basket: basketReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export type StoreType = typeof store
export type ThunkDispatchType = ThunkDispatch<StoreType, any, AnyAction>
export const useAppDispatch = () => useDispatch<ThunkDispatchType>()
