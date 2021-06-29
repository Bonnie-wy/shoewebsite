import { useState, useEffect } from 'react';

const UseProducts = () => {
    const [products, setProducts] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        fetch("/items")
        .then((response) => {
            if(!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then((data) => {
            setProducts(data);
        })
        .catch((error) => { 
            setError(error)
        });
    }, []);

    return {
        products: products,
        error: error
    };
};

export default UseProducts;