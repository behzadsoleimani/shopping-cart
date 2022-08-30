import { useEffect, useLayoutEffect, useState } from "react";
import classnames from "classnames/bind";
import styles from "./index.module.scss";
import { useStateValue } from "../../context/state";
import { getLocalStorge } from "../../helpers/util-functions";
import Expire from "../expire";

const cx = classnames.bind(styles);
export default function Basket() {
    const { cart, deleteCart, setCart } = useStateValue();

    const handledeleteCart = (id: string) => () => {
        deleteCart(id)
    }


    const onStorageUpdate = (e: any) => {
        const { key, newValue } = e;
        if (key === "cart") {
            setCart(JSON.parse(newValue));
        }
      };
    
    
      useLayoutEffect(() => {
        setCart(getLocalStorge("cart") || []);
        window.addEventListener("storage", onStorageUpdate);
        return () => {
          window.removeEventListener("storage", onStorageUpdate);
        };
      }, []);

    return (
        <div className={cx("basket-content" , {
            'basket-empty': !cart.length,
          })}>
            {cart.length ?
                cart.map((c: any, index: number) => (
                    <Expire delay={Number(c.orderLimitTime)}
                    id={c.id}><div key={index} className={cx("basket-content--parent")} style={{
                        borderBottom: index === cart.length - 1 ? "none" : "1px solid #efefef",
                    }}>
                        <img className={cx("basket-content--img")} src={c.poster} />
                        <img className={cx("basket-content--delete-icon")} src={"/img/delete.png"}
                            onClick={handledeleteCart(c.id)} />
                        <div className={cx("basket-content--footer-wrapper")} >
                            <p className={cx("basket-content--name")}>{c.name}</p>
                            <p className={cx("basket-content--price")}>{`$ ${c.price} USD`}</p>
                        </div>
                    </div></Expire>
                )) :
                <>
                    <img src={"/img/empty.png"} />
                    <p style={{
                        color: "#6D6D7A"
                    }}>Your basket is empty</p> </>}
        </div>
    );
}
