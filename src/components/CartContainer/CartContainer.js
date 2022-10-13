import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import {db} from "../../ultils/firebase"
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";


export const CartContaienr = () => {
    const {productCartList, removeItem, clearItems, getTotalPrice} = useContext(CartContext);
    const [idOrder, setIdOrder] = useState("");

  const sendOrder = (event)=>{
    event.preventDefault();
    const order = {
      buyer:{
        name: event.target[0].value,
        phone:event.target[1].value,
        email: event.target[2].value
      },
      items: productCartList,
      total: getTotalPrice()
    }
    console.log("order", order)
    const queryRef = collection(db, "orders");
    addDoc(queryRef, order).then(response=>{
      console.log("response", response);
      setIdOrder(response.id)
      clearItems();
    });
  }

  const updateOrder = ()=>{
    const queryRef = doc(db, "orders", "GbMMY0SYPjoTSuAvGKDF");
    updateDoc(queryRef,{
      total:80
    }).then(response=>console.log(response))
  }
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
                <form onSubmit={sendOrder}>
                <label>Nombre: </label>
                <input type="text" />
                <label>Telefono: </label>
                <input type="text" />
                <label>Correo: </label>
                <input type="email" />
                <button type='submit'>Enviar orden</button>
              </form>
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