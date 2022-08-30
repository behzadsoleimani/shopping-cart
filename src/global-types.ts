export interface IProduct {
    name: string;
    price: string;
    poster: string;
    orderLimitTime: string
}


export interface ICart extends IProduct {
    id: string
}