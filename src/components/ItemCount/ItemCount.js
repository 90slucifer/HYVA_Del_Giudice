import { useState } from "react"

const ItemCount = ({ stock, initial, onAdd}) => {
    const [contador, setContador] = useState(1)

    const suma = () => {
        if (contador === stock) {
            return
        }
        setContador(contador + 1)
    }

    const resta = () => {
        if (contador === initial) {
            return
        }
        setContador(contador - 1)
    }

    const add = () => {
        if (stock > 1) {
            onAdd(contador)
        }
    }
    
  
  return (
    <>
        <div>Contador</div>
        <h2>{contador}</h2>
        <button onClick={suma}>+</button>
        <button onClick={resta}>-</button>
        <br/>
        <button>Agregar al Carrito</button>
    </>
  )
}

export default ItemCount;
// <ItemCount stock="5" initial="1" />