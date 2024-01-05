import React from 'react'
import Navbarr from './Navbarr'
import { useSelector } from "react-redux"
import { ProductCard } from './ProductCard'

const Cart = () => {
    const cartProducts = useSelector((state) => state.products.products);
    

    return (
        <div className='flex flex-col gap-3 bg-black'>
            <Navbarr />
            <div className='border border-gray-600 rounded-md flex flex-wrap m-2 p-2 gap-2'>
                {cartProducts.length > 0 ? (
                    cartProducts.map((product) => (
                        <ProductCard key={product.id} product={product} buttonText = "remove" />
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </div>
        </div>
    )
}

export default Cart