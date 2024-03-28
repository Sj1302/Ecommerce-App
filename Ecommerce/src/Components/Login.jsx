/*eslint-disable*/
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import MyContext from '../context/MyContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import Loader from './Loader';

const Login = () => {

    const [email,setEmail]=useState("");
    const [password, setPassword] = useState("");
    const context= useContext(MyContext);
    const {loading,setLoading}= context;
    const navigate= useNavigate();
    const login= async()=>{
        setLoading(true);
        if(email==="" || password==="") {
            setLoading(false);
            return toast.error("Please enter all the Fields");
            
        }
        else{
            try {
                const response= await signInWithEmailAndPassword(auth,email,password);
                localStorage.setItem('user', JSON.stringify(response));
                toast.success("Logged In Successfully!");
                setEmail("");
                setPassword("");
                setLoading(false);
                navigate("/");

                
            } catch (error) {
                toast.error(`Error: ${error.message}`);
                setLoading(false);
            }
        }
    }
  return (
    <div className='flex justify-center items-center h-screen'>

            {loading && <div className="absolute inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50"><Loader /></div>}
            {/* Login Form  */}
            <div className="login_Form bg-gray-50 px-1 lg:px-8 py-6 border border-gray-300 rounded-xl shadow-md">
                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold  '>
                    Login In
                    </h2>
                </div>
                
                {/* Input Two  */}
                <div className="mb-3">
                    <input
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                        type="email"
                        placeholder='Email Address'
                        className='bg-gray-50 border border-gray-300 px-2 py-2 w-96 rounded-md outline-none placeholder-black'
                    />
                </div>
                {/* Input Three  */}
                <div className="mb-5">
                    <input
                    value={password}
                     onChange={(e) => {setPassword(e.target.value)}}
                        type="password"
                        placeholder='Password'
                        className='bg-gray-50 border border-gray-300 px-2 py-2 w-96 rounded-md outline-none placeholder-black'
                    />
                </div>
                {/* Signup Button  */}
                <div className="mb-5">
                    <button
                    onClick={login}
                        type='button'
                        className='bg-yellow-400 hover:bg-yellow-500 w-full text-white text-center py-2 font-bold rounded-md '
                    >
                      Log In
                    </button>
                </div>
                <div>
                    <h2 className='text-black'>Don't Have an account?... <Link className=' text-yellow-500 font-bold' to={'/Signup'}>Sign up</Link></h2>
                </div>
            </div>
        </div>
  )
}

export default Login
