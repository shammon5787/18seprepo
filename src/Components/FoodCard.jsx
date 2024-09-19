import React from 'react'
import img from '../Food/6.avif'
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addCard } from '../Store/CardSlice';

const FoodCard = ({id , name, price, image, rating, desc}) => {
    const dispatch = useDispatch()
    return (
        <div className='bg-gradient-to-r from-blue-800 to-green-950 w-full lg:w-[23vw] mt-1 rounded-md '>
            <div className='p-3 flex flex-col items-center'>
                <img className='w-[200px] h-[100px] rounded-md cursor-grab hover:scale-110 transition-all duration-500 ' src={image} alt="" />
            </div>
            <div className='p-3 font-semibold bg-slate-900 rounded-b-md outline-none'>
                <div className='flex items-center justify-between'>
                    <h1>{name}</h1>
                    <h1>$: {price}</h1>
                </div>
                <p className='font-thin'>{desc}!</p>
                <div className='flex items-center justify-between'>
                    <span className='flex items-center'>
                        <MdOutlineStar className='text-2xl text-yellow-400' />
                        <h1>{rating}</h1>
                    </span>
                    <button onClick={()=>dispatch(addCard({id, name, price, image, qty : 1}))} className='bg-blue-950 px-2 rounded-md py-0.5 hover:bg-gray-500 transition-all duration-500 my-2 '>Add To Card</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard