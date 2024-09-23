import React, { useState } from 'react'
import { IoIosClose } from "react-icons/io";
import { BiSolidCart } from "react-icons/bi";
import CardItem from './CardItem';
import { useDispatch, useSelector } from 'react-redux';

const Cards = () => {
  const [activeCard, setactiveCard] = useState(true)
  const selectCart = useSelector((state)=>state.cart.cart)
  const totalItem = selectCart.reduce((totalItem , item)=>totalItem + item.qty, 0)
  const totalPrice = selectCart.reduce((totalPrice, item)=>totalPrice + item.qty * item.price, 0)
  return (
    <>
      <div className={`bg-blue-900 w-full h-full lg:w-[28vw] fixed top-0 right-0 p-3 ${activeCard ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50 shadow-md`}>
        <div className='flex items-center justify-between font-semibold'>
          <h1 className='text-2xl'>Your Orders</h1>
          <IoIosClose onClick={() => setactiveCard(false)} className='text-5xl cursor-pointer bg-gray-600 rounded-full hover:bg-white hover:text-black transition-all duration-500 ' />
        </div>

        {
          selectCart.map((food)=>{
            return(
              <CardItem key={food.id} id = {food.id} name = {food.name} image = {food.image} price = {food.price} qty = {food.qty} />
            )
          })
        }

        <div className='absolute bottom-1 font-semibold'>
          <h1>Total Items: {totalItem} </h1>
          <h1>Total Price: {totalPrice} </h1>
          <hr />
          <button className='bg-blue-950 px-2 rounded-md py-0.5 hover:bg-gray-500 transition-all duration-500 my-1.5 w-[90vw] lg:w-[24vw] '>Check Out</button>
        </div>
      </div>
      <BiSolidCart onClick={() => setactiveCard(true)} className={`text-5xl fixed right-5 bottom-4 cursor-pointer bg-green-50 rounded-full text-blue-800 ${selectCart.length > 0 ? 'animate-bounce' : "animate-none"}  `} />
    </>
  )
}

export default Cards