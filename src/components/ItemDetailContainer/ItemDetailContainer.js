import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom"
import { db } from '../../ultils/firebase';
import {doc, getDoc} from "firebase/firestore"


const ItemDetailContainer = ({texto}) => {
    const {productId} = useParams();
    const [item, setItem] = useState({});

    useEffect(()=>{
        const getProduct = async()=>{
            const queryRef = doc(db,"items",productId);
            const response = await getDoc(queryRef);
            const newItem = {
                id: response.id,
                ...response.data(),
            }
            setItem(newItem);
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