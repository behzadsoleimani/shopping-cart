import { useEffect, useState } from "react";
import classnames from "classnames/bind";
import styles from "./index.module.scss";
import { useStateValue } from "../../context/state";
import { IProduct } from "../../global-types";

const cx = classnames.bind(styles);
export default function ProductItem({ product }: { product: IProduct }) {
    const { addToCart } = useStateValue();

    const addToBasket = (item: any) => () => {
        addToCart({ ...item, id: new Date().getTime().toString() })
    }

    return (
        <div className={cx("products-item")}>
            <div className={cx("products-item--img")}>
                <img src={product.poster} />
            </div>
            <span className={cx("products-item--limit")}><img src={"/img/icon.png"} />{`${Number(product.orderLimitTime) / 1000} min`}</span>
            <div style={{
                textAlign: "left",
                width: "80%"
            }}>
                <p className={cx("products-item--name")}>{product.name}</p>
                <p className={cx("products-item--price")}>{`$ ${product.price} USD`}</p>
            </div>
            <button className={cx("products-item--basket")}
                onClick={addToBasket(product)}>Add to basket</button>
        </div>
    );
}
