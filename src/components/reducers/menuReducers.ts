import { Action, ActionTypes } from "../actions"
import { MenuDataInterFace } from "../interfaces/menu.interface"

export const MenuReducers = (
    state: MenuDataInterFace = {
        open: true
    },
    action: Action
) => {
    switch (action.type) {
        case ActionTypes.toggleMenu:
            let open = !state.open;
            return {
                open
            }
        default:
            return state
    }
}