import React, { ReactNode, useEffect, useState } from "react";
import { useStateValue } from "../../context/state";

const Expire = ({ children , delay , id }: {children: ReactNode , delay: number , id: string}) => {
    const [visible, setVisible] = useState(true);
    const { deleteCart } = useStateValue();

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            deleteCart(id)
        }, delay);
        return () => clearTimeout(timer)
    }, [delay]);

    return visible ? <div>{children}</div> : <div />;
};

export default Expire;