import React from 'react'
import img from '../Food/2.avif'
import { FiMinus, FiPlus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { decrementItem, incrementItem, removeCard } from '../Store/CardSlice';
import { useDispatch } from 'react-redux';

const CardItem = ({id, name, price, image, qty}) => {
  const dispatch = useDispatch()
    return (
        <div className='bg-green-900 p-1.5 rounded-md mt-1.5 flex gap-5'>
            <MdDelete onClick={()=>dispatch(removeCard({id}))} className='absolute cursor-pointer right-7 hover:text-red-800' />
            <img className='w-[50px] h-[50px] rounded-full ' src={image} alt="" />
            <div className='flex font-semibold'>
                <div className='leading-5 mt-3'>
                    <h1>{name}</h1>
                    <h1>$: {price}</h1>
                </div>
                <div className='flex gap-4 items-center absolute right-6 mt-7'>
                    <FiMinus onClick={()=>qty > 1 ? dispatch(decrementItem({id})) : qty = 1} className='text-xl bg-gray-600 rounded-full hover:bg-white hover:text-black cursor-pointer transition-all duration-500' />
                    <span>{qty}</span>
                    <FiPlus onClick={()=>dispatch(incrementItem({id}))} className='text-xl bg-gray-600 rounded-full hover:bg-white hover:text-black cursor-pointer transition-all duration-500' />
                </div>
            </div>
        </div>
    )
}

export default CardItem