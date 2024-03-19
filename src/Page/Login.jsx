import axios from 'axios';
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { isLogin } from '../Auth';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate=useNavigate();
  const [msg, setMsg]=useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/login", formData)
    .then(result=>{
        console.log("result.data: ", result.data)
        if(result.data.msg === "Success"){
            localStorage.setItem("email", formData.email)
            localStorage.setItem("token", result.data.id)
            localStorage.setItem("isLogin", true)

            console.log(result.data.id)
            if(result.data.type === "client"){
                navigate("/user/dashboard")
            }
            else if(result.data.type === "admin"){
                navigate("/admin")
            }
            else{
                navigate("/contact-admin")
            }

        }
        else{
            setMsg(result.data)
        }
        
    })
    .catch(err=>console.log(err))
    console.log(formData);
  };

  if (isLogin()){
    return <Navigate to="/user/dashboard"/>
  }
  else{
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
            <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in to your account</h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
                <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                />
                </div>
                <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                </div>
            </div>

            <div>
            <p className=' text-red-600 py-2 w-fit mx-auto'>{msg}</p>
                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Log in
                </button>
                <p className='pt-2'>Don't have account? <span className=' text-blue-600'><Link to="/signup">Sign Up</Link></span></p>
            </div>
            </form>
        </div>
        </div>
    );
    }
};


export default Login