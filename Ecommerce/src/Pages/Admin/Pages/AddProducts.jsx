/*eslint-disable*/
import React, { useContext } from 'react'
import MyContext from '../../../context/MyContext'
import Loader from '../../../Components/Loader';

const AddProducts = () => {
    const context=useContext(MyContext);
    const {products,setProducts,addproducts, loading}=context;

  return (

            <div className='flex justify-center items-center h-screen bg-gray-200'>
                 {loading && <div className="absolute inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50"><Loader /></div>}
           
                <div className=' bg-white px-10 py-10 rounded-xl my-5 '>
                    <div className="">
                        <h1 className='text-center text-black text-xl mb-4 font-bold'>Add Product</h1>
                    </div>
                    <div>
                        <input type="text"
                        value={products.title}
                        onChange={(e)=>setProducts({...products,title: e.target.value})}
                            name='title'
                            className=' border-b-gray-500 border-2 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg  placeholder:text-black-200 outline-none'
                            placeholder='Product title'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='price'
                            value={products.price}
                        onChange={(e)=>setProducts({...products,price: e.target.value})}
                            className=' border-b-gray-500 border-2 outline-none mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-black-200'
                            placeholder='Product price'
                        />
                    </div>
                    <div>
                        <input type="text"
                        value={products.imageUrl}
                        onChange={(e)=>setProducts({...products,imageUrl: e.target.value})}
                            name='imageurl'
                            className=' outline-none border-b-gray-500 border-2 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-black-200'
                            placeholder='Product imageUrl'
                        />
                    </div>
                    <div>
                        <input type="text"
                        value={products.category}
                        onChange={(e)=>setProducts({...products,category: e.target.value})}
                            name='category'
                            className=' border-b-gray-500 border-2 outline-none mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-black-200'
                            placeholder='Product category'
                        />
                    </div>
                    <div>
                       <textarea cols="30" name='title'
                       value={products.description}
                       onChange={(e)=>setProducts({...products,description: e.target.value})}
                            className='outline-none border-b-gray-500 border-2 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-black-200'
                            placeholder='Product Description'>

                       </textarea>
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button
                        onClick={addproducts}
                            className=' bg-green-500 w-full text-white font-bold  px-2 py-2 rounded-lg'>
                            Add Product
                        </button>
                    </div>
                 
                </div>
            </div>

  )
}

export default AddProducts
