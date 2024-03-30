/*eslint-disable*/
import React, { useContext, useEffect, useState } from 'react'
import MyContext from '../../context/MyContext'
import Layout from '../../Components/Layout'
import Loader from "../../Components/Loader"
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'
const Order = () => {
  const userid = JSON.parse(localStorage.getItem('user')).user.uid
  const context = useContext(MyContext)
  const { mode, loading,setLoading , order} = context
  // const [order, setOrder] = useState([]);

  // useEffect(()=>{
  //   getOrderData();
  // },[])
  
  //   const getOrderData = async () => {
  //     setLoading(true);
  //     try {
  //       console.log("context");
  //       const querySnapshot = await getDocs(collection(db, "orders"));
  //       if (querySnapshot.empty) {
  //         console.log("No documents found in the 'orders' collection.");
  //       } else {
  //         const ordersArray = [];
  //         querySnapshot.forEach((doc) => {
  //           ordersArray.push(doc.data());
  //         });
  //         setOrder(ordersArray);
  //         console.log(ordersArray);
  //       }
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching orders:", error);
  //       setLoading(false);
  //     }
  //     finally{
  //       setLoading(false);
  //     }
  //   };
  
  const userorder= order.filter(obj => obj.userid === userid);

  return (
    <Layout>
    {loading && (
      <div className="absolute inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
        <Loader />
      </div>
    )}
    { userorder.length > 0 ? (
      <div className="h-full pt-10">
        {userorder?.map(order => (
          <div key={order.id} className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            {order.cartitem.map(item => (
              <div key={item.id} className="rounded-lg md:w-2/3">
                <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '' }}>
                  <img src={item.imageUrl} alt="product-image" className="w-full rounded-lg sm:w-40" />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.title}</h2>
                      <p className="mt-1 text-xs text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.description}</p>
                      <p className="mt-1 text-xs text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    ) : (
      <h2 className="text-center text-2xl text-black h-[300px] flex items-center justify-center">No Orders Yet</h2>
    )}
  </Layout>
  )
}

export default Order
