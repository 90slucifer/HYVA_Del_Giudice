import { Link } from "react-router-dom"

const Item = ({id, brand, model, year, image, price,}) => {
    return (
        <div>
            <img src={image} alt={brand.model} />
            <h1>{brand} {model}</h1>
            <p>{year} ${price}</p>
            <Link to={`/item/${id}`}>
                <button className="btn-info">Ver mas</button>
            </Link>
        </div>
    )
}

export default Item