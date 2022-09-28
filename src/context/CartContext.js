import React, { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({children})=>{
    const [productCartList, setProductCartList] = useState([]);

    const isInCart = (productId) =>{ 
        const productExist = productCartList.some(item=>item.id === productId)
        return productExist
    }

    const addItem =(item, quantity)=>{
        console.log("item", item, "quantity", quantity)
        const newProduct ={
            ...item,
            quantity
        }
        if(isInCart(item.id)){
            const productPos = productCartList.findIndex(product=>product.id === item.id);
            const newArrangement = [...productCartList];
            newArrangement[productPos].quantity = newArrangement[productPos].quantity + quantity;
            setProductCartList(newArrangement);
        } else{
            const newArrangement = [...productCartList];
            newArrangement.push(newProduct);
            setProductCartList(newArrangement);
        }
        
    }

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