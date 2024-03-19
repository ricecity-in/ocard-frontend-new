import React from 'react'
import { Link } from 'react-router-dom';
import { isLogin } from '../Auth';

function LandingPage() {
  return (
    <>
    <div className="relative w-full lg:min-h-screen h-[100vh] overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dwj3llorl/image/upload/v1709398193/ocard/ocard-bg_hhlyiu.webp')`, // Replace 'your-image.jpg' with the actual image URL
        filter: 'blur(10px)' // Adjust blur amount as needed
      }}
    ></div>
    <div className="relative z-10 text-center pt-50px">
      {/* Your content goes here */}
      

      <div className='mt-10 lg:mt-48 text-center items-center text-[40px] lg:text-[90px] font-bold tracking-wider highlight-text text-shadow' >
        <img className='mx-auto' src="https://res.cloudinary.com/dwj3llorl/image/upload/v1709398261/ocard/download_1_fhhq9n.png" />
        </div>
      <Link to="/login">
        <button className="mt-4 rounded-lg items-center bg-green-800 text-white py-2 px-6 w-fit mx-auto tracking-wide">{isLogin() ? 'Dashboard' : 'Login'}</button>
      </Link>
    </div>
  </div>
  </>
  )
}

export default LandingPage