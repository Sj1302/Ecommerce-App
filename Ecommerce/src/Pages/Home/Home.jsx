/*eslint-disable*/
import React from 'react'
import Layout from '../../Components/Layout'
import HeroSection from '../../Components/HeroSection'
import Filter from '../../Components/Filter'
import ProductCards from '../../Components/ProductCards'
import Testimonials from '../../Components/Testimonials'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/CartSlice'
import { Link } from 'react-router-dom'
const Home = () => {


  return (
    <Layout>
      <HeroSection/>
      <Filter/>
      <ProductCards/>
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/allproducts'}>
          <button className=' bg-gray-300 px-5 py-2 rounded-md hover:bg-yellow-500 hover:text-white'>See more...</button>
        </Link>
      </div>
      <Testimonials/>
    </Layout>
  )
}

export default Home
