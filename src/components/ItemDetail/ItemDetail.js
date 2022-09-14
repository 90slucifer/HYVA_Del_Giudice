

 const ItemDetail = ({item}) => {
    const { image, model, brand, year, description, price } = item
    return (
        <div>
            <img src={image} alt={model} />
            <h1>{brand} {model}</h1>
            <p>{year} ${price}</p>
            <p>{description}</p>
        </div>
    )
}

export default ItemDetail