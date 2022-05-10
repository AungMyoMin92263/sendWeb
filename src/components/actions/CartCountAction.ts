import { NavigatorDataInterFace } from "../interfaces/navigator.interface";
import { ActionTypes } from "./types";

export interface CartCountAction{ 
    type: ActionTypes.cartCount;
    payload: NavigatorDataInterFace;
}

export const CartCountACT = (cartCount: NavigatorDataInterFace) => {
    return {
        type: ActionTypes.cartCount,
        payload: cartCount
    };
};