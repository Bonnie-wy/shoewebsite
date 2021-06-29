import React from 'react';
import { useParams } from 'react-router-dom';
// Component
import Product from './Product';
// Custom hook
import UseCategoryItems from '../hooks/useCategoryItems';

const CategoryPage = () => {
    const { id } = useParams();
    const { categoryItems } = UseCategoryItems(id);

    return (
        <>
            <h2>{categoryItems && categoryItems.category}</h2>
            <div className="container">
                {categoryItems &&
                    <Product items={categoryItems.items} />
                }
            </div>
        </>
    )
}

export default CategoryPage
