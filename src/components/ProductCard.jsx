import React from 'react';
import { add } from '../store/ProductsSlice';
import { useDispatch } from 'react-redux';

export const ProductCard = ({ product, buttonText }) => {

    const dispatch = useDispatch()
    const handleSubmit = (product) => {
        const serializedProduct = {
            title: product.title,
            thumbnail: product.thumbnail,
            id: product.id,
            description: product.description,
        };

        const existingProducts = JSON.parse(localStorage.getItem("products")) || [];

        // Check if the product with the same ID already exists
        const isProductExists = existingProducts.some(pro => pro.id === serializedProduct.id);

        if (!isProductExists) {
            // If the product doesn't exist, add it to the cart
            dispatch(add(serializedProduct));
            const updatedProducts = [...existingProducts, serializedProduct];
            localStorage.setItem("products", JSON.stringify(updatedProducts));
        } else {
            // If the product already exists, handle duplicate product scenario (optional)
            console.log("Product already exists in the cart.");
            // You can show a message, or handle the duplicate product scenario here.
        }
    };

    const handleDelete = (product) => {
        console.log("deleting")
    }

    return (
        <div className="w-72 h-96 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className='w-full h-[200px]'>
                <a href="#!">
                    <img
                        className="rounded-t-lg w-full h-full object-cover"
                        src={product.thumbnail}
                        alt=""
                    />
                </a>
            </div>

            <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {product.title}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 truncate">
                    {product.description}
                </p>
                <button type='submit' onClick={() => {
                    buttonText === "add" ? handleSubmit(product) : handleDelete(product);
                }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    {buttonText}
                </button>

            </div>
        </div >
    );
}
