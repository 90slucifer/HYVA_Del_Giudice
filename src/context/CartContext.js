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
            newArrangement[productPos].quantityPrice = newArrangement[productPos].quantity * newArrangement[productPos].price;
            setProductCartList(newArrangement);
        } else{
            const newArrangement = [...productCartList];
            newProduct.quantityPrice = newProduct.quantity * newProduct.price;
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

    const getTotalPrice = ()=>{
        const totalPrice = productCartList.reduce((acc, item)=>acc + item.quantityPrice,0);
        return totalPrice;
    }

    const getTotalProducts = ()=>{
        const totalProducts = productCartList.reduce((acc, item)=>acc + item.quantity,0);
        return totalProducts;
    }

    return(
        <CartContext.Provider value={{productCartList, addItem, removeItem, clearItems, isInCart, getTotalPrice, getTotalProducts}}>
            {children}
        </CartContext.Provider>
    )
}