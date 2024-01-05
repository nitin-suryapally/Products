import React, { useEffect, useState } from 'react';
import {ProductCard} from './ProductCard';

const Main = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");

                if (response.ok) {
                    const data = await response.json();
                    setProducts(data.products);
                    console.log(products)
                }
            } catch (err) {
                console.error("Error in fetching products:", err);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className='border border-gray-600 rounded-md flex flex-wrap m-2 p-2 gap-2'>
            {products.length > 0 ? (
                products.map((product) => (
                    <ProductCard key={product.id} product={product} buttonText = "add" />
                ))
            ) : (
                <p>No products available</p>
            )}
        </div>
    );
};

export default Main;
