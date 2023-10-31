import { useContext } from 'react';
import {CartContext} from '../../contexts/cart.context';

import '../../component/product-card/product-card.styles.scss';
import Button from '../button/button.component';

const ProductCard = ({products}) => {
    const {name, imageUrl, price} = products;
    const {addItemToCart} = useContext(CartContext);

    const addProductToCart = () => addItemToCart(products)
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to card</Button>
        </div>
    );
};

export default ProductCard;