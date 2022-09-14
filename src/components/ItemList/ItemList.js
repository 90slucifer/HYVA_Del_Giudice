import Item from "../Item/Item"

const ItemList = ({itemsList}) => {
    return (
        <>
           {
            itemsList.map((product) => {
                return (
                    <Item 
                    id={product.id}
                    brand={product.brand} 
                    model={product.model} 
                    year={product.year} 
                    image={product.image} 
                    price={product.price}
                    description={product.description}/>
                );
            })
           }
        </>
    )
}

export default ItemList