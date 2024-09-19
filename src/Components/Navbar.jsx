import React from 'react'
import { useDispatch } from 'react-redux'
import { addSearch } from '../Store/SearchSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
        <div className='font-bold text-4xl'>
            <h1>{new Date().toUTCString().slice(0, 16)}</h1>
            <h1 className='uppercase'>welcome to new fast food center</h1>
        </div>
        <input onChange={(e)=>dispatch(addSearch(e.target.value))} className='w-full p-2 rounded-md lg:w-[25vw] text-black font-semibold outline-none mt-1 ' type="search" name="search" placeholder='search here' id="" />
    </div>
  )
}

export default Navbar