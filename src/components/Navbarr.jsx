import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"

const Navbarr = () => {
    const navigate = useNavigate()
    const cartProducts = useSelector((state) => state.products.products);
    const len = cartProducts.length
    const [isClicked, setIsClicked] = useState(false)
    const handleClick = () => {
        navigate("/cart")
        setIsClicked((prev) => !prev)
    }
    return (
        <div className='flex px-2 py-4 bg-slate-800 justify-between items-center h-14'>
            <h6 className='text-white text-2xl '><Link to="/" >Products</Link></h6>

            <div className='flex gap-10 justify-between items-center px-2'>
                <SearchBar />
                <div className=" flex justify-center items-center pb-1">
                    <div className="relative py-2">
                        <div className="t-0 absolute left-3">
                            <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{len}</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={handleClick} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="file: mt-4 h-6 w-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbarr
