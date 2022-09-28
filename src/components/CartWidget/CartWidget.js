import cart from "./cart.png";
import "./CartWidget.css";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
    const {getTotalProducts} = useContext(CartContext);
    return (
        <div>
            <Link to="/cart">
            <img src={cart} />
            <span style={{backgroundColor: "white", borderRadius: "10px"}}>{getTotalProducts()}</span>
            </Link>
        </div>
    );
};

export default CartWidget;