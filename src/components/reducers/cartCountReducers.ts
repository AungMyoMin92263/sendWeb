import { Action, ActionTypes } from "../actions"
import { CartCountInterFace } from "../interfaces/cartCount.interface"

export const CartCountReducers = (
    state: CartCountInterFace = {
        cartCount : 3
    },
    action: Action
) => {
    switch (action.type) {
        case ActionTypes.cartCount:{
            let cartCount = state.cartCount + 1;
            return {
                cartCount
            }
        }
        default:
            return state
    }
}