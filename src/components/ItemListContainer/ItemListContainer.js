import './ItemListContainer.css'
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';
import { collection, doc, getDocs, query, where } from "firebase/firestore"
import { db } from '../../ultils/firebase';
import Item from '../Item/Item';


const ItemListContainer = ({texto}) => {
    const {brandId} = useParams();
    const [items, setItems] = useState([]);

        useEffect(() => {
            const queryRef = !brandId ? collection(db, "items") : query(collection(db, "items"),where("brand","==",brandId));
            getDocs(queryRef).then(response=>{
                const results = response.docs.map(doc=>{
                    const newItem ={
                        id:doc.id,
                        ...doc.data(),
                    }
                    return newItem
                });
                setItems(results)
            })
        },[brandId])
    return (
        <div className="item-list-container">
            <br></br>
                <ItemList itemsList={items} />
        </div>
    );

};

export default ItemListContainer;