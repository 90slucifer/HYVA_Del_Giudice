import { useState } from "react";
import  ItemCount from "../ItemCount/ItemCount"

 const ItemDetail = ({item}) => {
    const { image, model, brand, year, description, price } = item;
    const [counter, setCounter] = useState(0);
    const onAdd = (datum)=>{
        setCounter(datum)
    }

    return (
        <div>
            <img src={image} alt={model} />
            <h1>{brand} {model}</h1>
            <p>{year} ${price}</p>
            <p>{description}</p>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail