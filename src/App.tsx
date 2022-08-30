import ProductsList from "./components/products-list";
import classnames from "classnames/bind";
import styles from "./index.module.scss";
import Basket from "./components/basket";
import Provider from "./context";

const cx = classnames.bind(styles);
export default function App() {

 

  return (
    <Provider>
      <div className={cx("App")}>
        <ProductsList
        />
        <Basket />
      </div>
    </Provider>
  );
}
