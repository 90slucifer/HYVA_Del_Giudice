

const ItemDetail = ({id, brand, model, year, image, price}) => {
    return (
        <div>
            <img src={image} alt={brand.model} />
            <h1>{brand} {model}</h1>
            <p>{year} ${price}</p>
            <p>{description}</p>
        </div>
    )
}

export default ItemDetail