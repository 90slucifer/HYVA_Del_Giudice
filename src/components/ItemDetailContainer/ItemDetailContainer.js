import data from './mock-data';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom"

const ItemDetailContainer = ({texto}) => {
    const {productId} = useParams();
    const [items, setItems] = useState([]);

    const getItem = (id)=>{
        return new Promise((resolve, reject)=>{
            const item = data.find(item=>item.id === parseInt(id));
            resolve(item)
        })
    }

    useEffect(()=>{
        const getProduct = async()=>{
            const product = await getItem(productId);
            console.log('product', product)
            setItems(product);
        }
        getProduct();
    },[productId])

    console.log('item:', items)

    return (
        <>
        <ItemDetail items={items} />
        </>
    );

};

export default ItemDetailContainer;