/**
 *  @interface IStateVariables
 *  @interface IActions
 *  @interface IUser
 *  @enum ActionTypes
 */

import { ICart, IProduct } from "../global-types";

export interface IStateVariables {
    products: IProduct[];
    cart: ICart[];
}

export interface IActions {
    setProducts: (products: IProduct[]) => void;
    addToCart: (item: ICart) => void;
    deleteCart: (id: string) => void;
    setCart: (cart: ICart[]) => void;
}


export interface IStateValue extends IStateVariables, IActions {

}

export enum ActionTypes {
    SET_PRODUCTS,
    ADD_CART,
    DELETE_CART,
    SET_CART
}
