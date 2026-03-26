import React, { useContext, useEffect, useState } from 'react'
import {ProductData}  from "../services/api";
import { CartContext } from "../context/CardContext";


const ProductCard = () => {
    const [Product, setProduct] = useState([])

    const {AddCart} = useContext(CartContext)

    useEffect(() => {
        const fetchData = async () => {
            const data = await ProductData()
            setProduct(data)
            console.log(data);
            
        }
        fetchData()
    }, [])


    return (
        <div className='mt-5 mb-5 '>
           
            <div
                className=" mt-1 pl-4 flex flex-wrap"
            >
                {Product.map((elem) => {
                    return <div key={elem.id}>
                        <div className='bg-gray-100 h-60 w-50 m-2 rounded-3xl hover:scale-102 relative'>

                            <div className='absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg'>
                                56%  <br />OFF
                            </div>
                            <div className='h-[63%] rounded-3xl p-4'>
                                <img className='w-full h-full object-contain rounded-3xl ' src={elem.image} alt="" />
                            </div>
                            <div className='flex gap-1 flex-col px-4 font-bold items-1center'>
                                <h1 className='line-clamp-1'>{elem.title}</h1>
                                <h3>Price: ${Math.round(elem.price)}</h3>
                                <div className='flex gap-2 justify-center'>
                                    <button className='h-6 w-20 text-white rounded-lg text-[10px] bg-blue-800 active:scale-95' type='button'>Buy Now</button>
                                    <button onClick={() =>{
                                        AddCart(elem)
                                    }} className='h-6 w-20 text-white rounded-lg text-[10px] bg-red-800 active:scale-95' type='button'>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default ProductCard
