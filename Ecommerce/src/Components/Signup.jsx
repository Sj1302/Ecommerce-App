/*eslint-disable*/
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MyContext from "../context/MyContext";
import { auth, db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore"; 
import {  createUserWithEmailAndPassword } from "firebase/auth";
import Loader from "./Loader";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
const context= useContext(MyContext);
const {loading, setLoading}= context;
const navigate= useNavigate();
  const handleSignin= async()=>{
    setLoading(true);
    if (!name || !email || !password){
      
      return toast.error("Please enter all Fields");
    } 
    else{
      try {
        const user = await createUserWithEmailAndPassword(auth, email, password)
        const docRef = await addDoc(collection(db, "users"), {
          name: name,
          email: email,
          userId:user.user.uid
        });
        setEmail("");
        setName("");
        setPassword("");
        toast.success("SignIn Successfull");
        navigate("/login")
        
      } catch (error) {
        toast.error(`Error: ${error.message}`);
      }
    }
    setLoading(false);
    
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
      {loading && <div className="absolute inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50"><Loader /></div>}
        {/* Login Form  */}
        <div className="login_Form bg-gray-50 px-1 lg:px-8 py-6 border border-gray-300 rounded-xl shadow-md">
          {/* Top Heading  */}
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold  ">Sign In</h2>
          </div>
          {/* Input One  */}
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="bg-gray-50 border border-gray-300 px-2 py-2 w-96 rounded-md outline-none placeholder-black"
            />
          </div>
          {/* Input Two  */}
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="bg-gray-50 border border-gray-300 px-2 py-2 w-96 rounded-md outline-none placeholder-black"
            />
          </div>
          {/* Input Three  */}
          <div className="mb-5">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="bg-gray-50 border border-gray-300 px-2 py-2 w-96 rounded-md outline-none placeholder-black"
            />
          </div>
         
          {/* Signup Button  */}
          <div className="mb-5">
            <button
              type="button"
              className="bg-yellow-400 hover:bg-yellow-500 w-full text-white text-center py-2 font-bold rounded-md " onClick={handleSignin}
            >
              Sign In
            </button>
          </div>
          <div>
            <h2 className="text-black">
              Have an account?....{" "}
              <Link className=" text-yellow-500 font-bold" to={"/login"}>
                Login
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
