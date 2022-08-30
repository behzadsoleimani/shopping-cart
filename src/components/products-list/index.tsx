import { useEffect, useState } from "react";
import classnames from "classnames/bind";
import ProductItem from "../products-item"
import styles from "./index.module.scss";
import { useStateValue } from "../../context/state";

const cx = classnames.bind(styles);
export default function ProductsList() {

    const { products, setProducts } = useStateValue();

    const getData = () => {
        fetch('/products.json')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.data);
            });
    };

    useEffect(() => {
        getData()
    }, []);

    return (
        <div className={cx("products-wrapper")}>
            {products.map((p: any, index: number) => (
                <ProductItem key={index} product={p}
                     />
            ))}
        </div>
    );
}
