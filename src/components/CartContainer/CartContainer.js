import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


export const CartContaienr = () => {
    const {productCartList, removeItem, clearItems, getTotalPrice} = useContext(CartContext);
    return (
        <div>
            {
              productCartList.length > 0 ?
            <div>
                <div>
                {productCartList.map(item=>(
                    <div>
                    <p>Vehiculo: {item.model} Cantidad: {item.quantity}</p>
                    <p>usd{item.quantityPrice}</p>
                    <button onClick={()=>removeItem(item.id)}>Quitar Producto</button>
                    </div>
                ))}
                    <p>Total: usd{getTotalPrice()}</p>
                    <button onClick={clearItems}>Vaciar Carrito</button>
                </div>
            </div>
            :
            <>
              <p>El carrito esta Vacio</p>
              <Link to="/">
              Ir a la pagina principal
              </Link>
            </>
            }
        </div>
    )
}