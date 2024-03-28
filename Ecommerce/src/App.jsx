/*eslint-disable*/
import { useState } from 'react';

import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NoPage from './Pages/NoPage/NoPage';
import Home from './Pages/Home/Home';
import Order from './Pages/Order/Order';
import Cart from './Pages/Cart/Cart';
import Dashboard from './Pages/Admin/Dashboard/Dashboard';
import MyState from './context/MyState';
import Allproducts from './Pages/Allproducts/Allproducts';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ProductInfo from './Components/ProductInfo';
import AddProducts from './Pages/Admin/Pages/AddProducts';
import UpdateProducts from './Pages/Admin/Pages/UpdateProducts';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function App() {
 

  return (
    <>
      <BrowserRouter>
       <MyState>
       <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/order" element={<ProtectedRouteForUsers>
            <Order />
          </ProtectedRouteForUsers>} /> 
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/dashboard" element={<ProtectedRouteForAdmins>
            <Dashboard />
          </ProtectedRouteForAdmins>} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/allproducts" element={<Allproducts />} /> 
          <Route path="/addproducts" element={<ProtectedRouteForAdmins>
            <AddProducts />
          </ProtectedRouteForAdmins>} /> 
          <Route path="/updateproducts" element={<ProtectedRouteForAdmins>
            <UpdateProducts />
          </ProtectedRouteForAdmins>} /> 
          <Route path="/productinfo/:id" element={<ProductInfo />} /> 
          <Route path="/*" element={<NoPage />} /> 
        </Routes>
        <ToastContainer />
       </MyState>
      </BrowserRouter>
      
    </>
  );
}

export const ProtectedRouteForUsers= ({children})=>{
  const user= localStorage.getItem("user");
  if(user){
    return children;
  }
  else{
    <Navigate to={"/login"}/>
  }
}

export const ProtectedRouteForAdmins= ({children})=>{
  const user= JSON.parse(localStorage.getItem("user"));
  if(user.user.email==="sachin1323jadhav@gmail.com"){
    return children;
  }
  else{
    <Navigate to={"/login"}/>
  }
}

export default App;
