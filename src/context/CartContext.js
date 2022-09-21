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

    const removeItem = (itemId)=>{
        const newArrangement = productCartList.filter(product=>product.id !== itemId);
        setProductCartList(newArrangement);
    }

    const clearItems = () => {
        setProductCartList([]);
      };

    const isInCart = (itemId) => {
        const productExists = productCartList.find((item) => item.id === itemId);
    
        if (productExists !== undefined) {
    
          return true;
        } else {
          console.log('false');
          return false;
        }
      };

    return(
        <CartContext.Provider value={{productCartList, addItem, removeItem, clearItems, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}