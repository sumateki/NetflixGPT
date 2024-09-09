import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errMsg, setErrMsg] = useState(null)

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const toggleSignInForm =() =>{
        setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick = () =>{
        //validate form data
        console.log(name.current.value)
        console.log(email.current.value)
        console.log(password.current.value)

        const msg = checkValidData(email.current.value, password.current.value)
        setErrMsg(msg)

        //if form is valid, sign in/ sign up
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

        <form 
            className='absolute p-12 bg-black w-4/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'
            onSubmit={(e)=>e.preventDefault()}
        >
            <h1 className='font-bold text-3xl py-4'>
                {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm &&(
             <input 
                ref={name}
                type='text' 
                placeholder='Full Name' 
                className='p-3 my-4 w-full rounded-sm bg-gray-700 border border-white' 
            />
            )}

            <input 
                ref={email}
                type='email' 
                placeholder='Email Address' 
                className='p-3 my-4 w-full rounded-sm bg-gray-700 border border-white' 
            />
           
            <input 
                ref={password}
                type='password' 
                placeholder='Password' 
                className='p-3 my-4 w-full rounded-sm bg-gray-700 border border-white' 
            />

            <p className='text-red-500 font-bold text-lg py-2'>{errMsg}</p>
            <button 
                className='p-2 my-4 bg-red-700 w-full rounded-sm '
                onClick={handleButtonClick}
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