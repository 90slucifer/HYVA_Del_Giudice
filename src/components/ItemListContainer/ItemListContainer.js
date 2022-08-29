import './ItemListContainer.css'

const ItemListContainer = ({texto}) => {
    return (
        <div className='temporal-text'>
            <h1>{texto}</h1>
        </div>
    );

};

export default ItemListContainer;