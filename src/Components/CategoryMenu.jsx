import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData.js'
import { useDispatch } from 'react-redux'
import { addCategory } from '../Store/CategorySlice.jsx'

const CategoryMenu = () => {
    const [categories, setcategories] = useState([])
    const listUniqueCategory = ()=>{
        const uniqueCategory = [... new Set(FoodData.map((food)=>food.category))]
        setcategories(uniqueCategory)
    }
    useEffect(() => {
      listUniqueCategory()
    }, [])
    
    const dispatch = useDispatch()

  return (
    <div className='mt-24'>
        <h1 className='uppercase font-bold text-2xl'>order your favorite food</h1>
        <div className='flex items-center gap-4 overflow-x-scroll lg:overflow-x-hidden'>
        <button onClick={()=>dispatch(addCategory("All"))} className='bg-blue-950 px-2 rounded-md py-0.5 hover:bg-gray-500 transition-all duration-500 my-2 '>All</button>
            {
                categories.map((category ,i )=>{
                    return(
                        <button onClick={()=>dispatch(addCategory(category))} key={i} className='bg-blue-950 px-2 rounded-md py-0.5 hover:bg-gray-500 transition-all duration-500 my-2 '>{category}</button>
                    )
                })
            }
        </div>
    </div>
  )
}

export default CategoryMenu