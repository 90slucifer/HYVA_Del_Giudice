import React, { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({children})=>{
    const [productCartList, setProductCartList] = useState([]);

    const addItem =(item, quantity)=>{
        console.log("item", item, "quantity", quantity)
        const newProduct ={
            ...item,
            quantity
        }
        const newArrangement = [...productCartList];
        newArrangement.push(newProduct);
        setProductCartList(newArrangement);
    }

    const isInCart = (id) => { return productCartList.some(prod => prod.id === id) }

    const removeItem = (itemId)=>{
        const newArrangement = productCartList.filter(product=>product.id !== itemId);
        setProductCartList(newArrangement);
    }

    const clearItems = () => {
        setProductCartList([]);
      };

    return(
        <CartContext.Provider value={{productCartList, addItem, removeItem, clearItems, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}