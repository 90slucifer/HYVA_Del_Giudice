import './ItemListContainer.css'
import data from './mock-data';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';


const ItemListContainer = ({texto}) => {
    const {brandId} = useParams();
    const [items, setItems] = useState([]);

    const getData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    })
        useEffect(() => {
            getData.then(resultado=>{
                if(brandId){
                    const newProducts = resultado.filter(item=>item.brand === brandId);
                    setItems(newProducts)
                } else{
                    setItems(resultado)
                }
            })
        },[brandId])
    return (
        <div className="item-list-container">
            <p>item list container</p>
                <ItemList itemsList={items} />
        </div>
    );

};

export default ItemListContainer;