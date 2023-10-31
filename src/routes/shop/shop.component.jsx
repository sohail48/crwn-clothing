import { useContext, Fragment } from 'react';

import {CategoriesContext} from '../../contexts/categories.context';
import ProductCard from '../../component/product-card/product-card.component';
import '../shop/shop.styles.scss';

const Shop = () => {
    const {CategoriesMap} = useContext(CategoriesContext);
    return(
        <Fragment>
            {Object.keys(CategoriesMap).map((title) => (
                <Fragment key={title}>
                    <h2>{title}</h2>
                    <div className='products-container'>
                        {CategoriesMap[title].map((products) => (
                            <ProductCard key={products.id} products={products} />
                        ))}
                    </div>
                </Fragment>
            ))}
        </Fragment>
    );
};

export default Shop;