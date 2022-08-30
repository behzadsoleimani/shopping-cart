import { ICart, IProduct } from "../global-types";
import { IStateVariables, IActions, ActionTypes } from "./type";

export default (state: IStateVariables, dispatch: any): IActions => ({
    setProducts: (products: IProduct[]) => {
        dispatch({ type: ActionTypes.SET_PRODUCTS, products });
    },
    deleteCart: (id: string) => {
        dispatch({ type: ActionTypes.DELETE_CART, id });
    },
    addToCart: (item: ICart) => {
        dispatch({ type: ActionTypes.ADD_CART, item });
    },
    setCart: (cart: ICart[]) => {
        dispatch({ type: ActionTypes.SET_CART, cart });
    }
});
