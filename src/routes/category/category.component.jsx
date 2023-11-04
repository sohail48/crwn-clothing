import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import {CategoriesContext} from '../../contexts/categories.context';
import ProductCard from '../../component/product-card/product-card.component';
import '../category/category.styles.scss';

const Category = () => {
    const {category} = useParams();
    const {CategoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(CategoriesMap[category]);

    useEffect(() => {
        setProducts(CategoriesMap[category]);
    }, [category, CategoriesMap]);

    return(
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
                {products && products.map((products) => (<ProductCard key={products.id} products={products} />))} 
            </div>
        </Fragment>
    );
};

export default Category;