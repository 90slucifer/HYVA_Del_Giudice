import data from '../ItemListContainer/mock-data';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom"

const ItemDetailContainer = ({texto}) => {
    const {productId} = useParams();
    const [item, setItem] = useState({});

    const getItem = (id)=>{
        return new Promise((resolve, reject)=>{
            const item = data.find(item=>item.id === parseInt(id));
            resolve(item)
        })
    }

    useEffect(()=>{
        const getProduct = async()=>{
            const product = await getItem(productId);
            console.log('producto', product)
            setItem(product);
        }
        getProduct();
    },[productId])

    console.log('item:', item)

    return (
        <div>
            <ItemDetail item={item} />
        </div>
    );

};

export default ItemDetailContainer;