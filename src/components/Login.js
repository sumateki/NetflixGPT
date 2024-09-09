import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)
    const toggleSignInForm =() =>{
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img 
            src='https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg'
            alt='bg_logo'
        />
        </div>

        <form className='absolute p-12 bg-black w-4/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>
                {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm &&(
             <input 
                type='text' 
                placeholder='Full Name' 
                className='p-3 my-4 w-full rounded-sm bg-gray-700 border border-white' 
            />
            )}

            <input 
                type='email' 
                placeholder='Email Address' 
                className='p-3 my-4 w-full rounded-sm bg-gray-700 border border-white' 
            />
           
            <input 
                type='password' 
                placeholder='Password' 
                className='p-3 my-4 w-full rounded-sm bg-gray-700 border border-white' 
            />
            <button 
                className='p-2 my-4 bg-red-700 w-full rounded-sm '
            >
                {isSignInForm ? "Sign In" : "Sign Up"}
            </button>

            <p className='text-sm py-4 cursor-pointer' onClick={toggleSignInForm}>
                {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
            </p>
        </form>
    </div>
  )
}

export default Login