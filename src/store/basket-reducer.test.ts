import {basketReducer, InitialBasketStateType, isBasketAC} from './basket-reducer';


test('correct todolist should be removed', () => {


    const startState: InitialBasketStateType = {
        basket: [],
        isBasket: false,
    }

    const endState = basketReducer(startState, isBasketAC( true))

    expect(endState.isBasket).toBe(true)

})
