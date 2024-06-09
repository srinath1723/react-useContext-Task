import React, { useState, useEffect } from 'react';
import Card from './card';
import NavBar from './Navbar';
import { useProducts } from '../context/productcontext';
import './card.css';

const CardData1 = () => {
    const { products, setProducts } = useProducts();
    const [totalCardCount, setTotalCardCount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        // Calculate the initial total number of products and total amount
        const initialCount = products.reduce((count, product) => count + (product.quantity || 1), 0);
        const initialAmount = products.reduce((sum, product) => sum + (product.price * (product.quantity || 1)), 0);
        setTotalCardCount(initialCount);
        setTotalAmount(initialAmount);
    }, [products]);

    const updateTotalCardCount = (delta) => {
        setTotalCardCount(prevCount => prevCount + delta);
    };

    const updateTotalAmount = (delta) => {
        setTotalAmount(prevAmount => prevAmount + delta);
    };

    const removeProduct = (productId) => {
        setProducts(prevProducts => {
            const updatedProducts = prevProducts.filter(product => product.id !== productId);
            return updatedProducts;
        });
    };

    const handleRefreshPage = () => {
        window.location.reload(); // Reload the page to reset the count
    };

    return (
        <div className="parent-container">
            <NavBar 
                totalCardCount={totalCardCount} 
                totalAmount={totalAmount} 
                handleRefreshPage={handleRefreshPage} 
            />
            {products.map((product) => (
                <Card 
                    key={product.id} 
                    product={product} 
                    updateTotalCardCount={updateTotalCardCount} 
                    updateTotalAmount={updateTotalAmount} 
                    removeProduct={removeProduct} 
                />
            ))}
        </div>
    );
};

export default CardData1;
