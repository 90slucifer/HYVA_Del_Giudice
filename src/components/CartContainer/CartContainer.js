import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";


export const CartContaienr = () => {
    const {productCartList, removeItem, clearItems} = useContext(CartContext);
    return (
        <div>
            CartContaienr
            <div>
                {productCartList.map(item=>(
                    <>
                    <p>{item.model} - {item.quantity}</p>
                    <button onClick={()=>removeItem(item.id)}>Quitar Producto</button>
                    <button onClick={()=>clearItems(item)}>Vaciar Carrito</button>
                    </>
                ))}
            </div>
        </div>
    )
}