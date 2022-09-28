import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


export const CartContaienr = () => {
    const {productCartList, removeItem, clearItems} = useContext(CartContext);
    return (
        <div>
            {
              productCartList.length > 0 ?
            <div>
                {productCartList.map(item=>(
                    <>
                    <p>{item.model} - {item.quantity}</p>
                    <button onClick={()=>removeItem(item.id)}>Quitar Producto</button>
                    <button onClick={()=>clearItems(item)}>Vaciar Carrito</button>
                    </>
                ))}
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