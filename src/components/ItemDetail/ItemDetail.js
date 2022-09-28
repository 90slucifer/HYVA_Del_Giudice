import { useState, useContext } from "react";
import  ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom"


 const ItemDetail = ({item}) => {
    const {addItem, isInCart} = useContext(CartContext);
    const { image, model, brand, year, description, price } = item;
    const [counter, setCounter] = useState(0);
    const onAdd = (datum)=>{
        setCounter(datum)
        addItem(item, datum)
    }

    return (
        <div>
          <div>
            <img src={image} alt={model} />
            <h1>{brand} {model}</h1>
            <p>{year} ${price}</p>
            <p>{description}</p>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
          </div>
          <div>
        {
            counter > 0 &&
            <Link to="/cart">
                <button>Ir al Carrito</button>
            </Link>
        }
          </div>
        </div>
    )
}

export default ItemDetail