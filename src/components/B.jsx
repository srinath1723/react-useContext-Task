import React, { useEffect } from 'react';

import { useProducts } from '../context/productcontext';
import CardData1 from './carddata1';

const B = () => {
    
    const { products, setProducts } = useProducts();

    useEffect(() => {
        fetch('/product.js')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching products:', error));
    }, [setProducts]);

    return (
        <div>
            <CardData1 />
        </div>
    );
};

export default B;
