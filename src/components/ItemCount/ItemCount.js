import { useState } from "react"

const ItemCount = ({ stock, initial, onAdd}) => {
    const [counter, setCounter] = useState(1)

    const addition = () => {
        if (counter === stock) {
            return
        }
        setCounter(counter + 1)
    }

    const subtraction = () => {
        if (counter === initial) {
            return
        }
        setCounter(counter - 1)
    }

    const add = () => {
        if (stock > 1) {
            onAdd(counter)
        }
        console.log(add)
    }
    
  
  return (
    <>
        <h2>{counter}</h2>
        <button onClick={addition}>+</button>
        <button onClick={subtraction}>-</button>
        <br/>
        <button onClick = { () => { onAdd(counter) }  }>Agregar al Carrito</button>
    </>
  )
}

export default ItemCount;
// <ItemCount stock="5" initial="1" />