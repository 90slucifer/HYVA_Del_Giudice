import cart from "./cart.png";
import "./CartWidget.css";
import {Link} from "react-router-dom";


const CartWidget = () => {
    return (
        <div>
            <Link to="/cart">
            <img src={cart} />
            </Link>
        </div>
    );
};

export default CartWidget;