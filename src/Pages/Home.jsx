import React from 'react'
import Navbar from '../Components/Navbar'
import CategoryMenu from '../Components/CategoryMenu'
import FoodItem from '../Components/FoodItem'
import Cards from '../Components/Cards'

const Home = () => {
  return (
    <div className='m-6'>
        <Navbar />
        <CategoryMenu />
        <FoodItem />
        <Cards />
    </div>
  )
}

export default Home