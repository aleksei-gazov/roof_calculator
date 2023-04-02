import {AppRootStateType} from '../../store/store';

export const selectorIsInitialized = ((state: AppRootStateType) => state.config.isInitialized)
 export const selectorConfig = ((state: AppRootStateType) => state.config.config)
 export const selectorData = ((state: AppRootStateType) => state.data)
