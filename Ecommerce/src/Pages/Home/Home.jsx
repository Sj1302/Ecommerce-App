/*eslint-disable*/
import React from 'react'
import Layout from '../../Components/Layout'
import HeroSection from '../../Components/HeroSection'
import Filter from '../../Components/Filter'
import ProductCards from '../../Components/ProductCards'
import Testimonials from '../../Components/Testimonials'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/CartSlice'

const Home = () => {
  const dispatch= useDispatch();
  const cartitem=useSelector((state)=>state.cart);


  const addcart= ()=>{
    dispatch(addToCart("shirt"));
  }
  const delcart= ()=>{
    dispatch(deleteFromCart("shirt"));
  }

  return (
    <Layout>
      <HeroSection/>
      <Filter/>
      <ProductCards/>
      <Testimonials/>
    </Layout>
  )
}

export default Home
