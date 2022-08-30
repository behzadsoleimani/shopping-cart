import { setLocalStorge } from "../helpers/util-functions";
import { IStateVariables, IActions, ActionTypes } from "./type";

export default (state: IStateVariables, action: any): IStateVariables => {
    const { type, ...payload } = action;
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return Object.assign({}, state, payload);
        case ActionTypes.ADD_CART:
            setLocalStorge("cart", [...state.cart, { ...payload.item }])
            return Object.assign({}, { ...state, cart: [...state.cart, { ...payload.item }] });
        case ActionTypes.DELETE_CART:
            const cart = state.cart.filter((c: any) => c.id !== payload.id);
            setLocalStorge("cart", cart)
            return Object.assign({}, { ...state, cart });
        case ActionTypes.SET_CART:
            return Object.assign({},  state, payload );
        default:
            return state;
    }
};
