/*eslint-disable*/
import React, { useContext } from 'react'
import MyContext from '../context/MyContext'

const Testimonials = () => {
    const context= useContext(MyContext);
    const {mode}= context;
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>What our <span className=' text-yellow-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed max-h-[180px]">I stumbled upon ShopEase while searching for a gift for my wife's birthday, and I'm so glad I did! The user-friendly interface made shopping a breeze....</p>
                                <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">John D</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Banglore, Karnataka</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed max-h-[180px]">I've been a loyal customer of ShopEase for over a year now, and I've never been disappointed. Their wide range of products, combined with their excellent customer....</p>
                                <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Emily P</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Chennai, Tamil Nadu</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed max-h-[180px]">I recently purchased a tech gadget from ShopEase, and I couldn't be happier with my experience. The website was easy to navigate, the checkout process was seamless, and my order arrived right on time. 5 stars!....</p>
                                <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Michael R</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">Mumbai, Maharastra</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Testimonials
