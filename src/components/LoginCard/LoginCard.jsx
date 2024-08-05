import React, { useState } from 'react'
import { MdCancel } from "react-icons/md";

const LoginCard = (props) => {
    const {close} = props

    const [loginForm , setLoginForm] = useState(false)

    const handleLoginForm = (e) => {
        console.log(e.target.name)
    }

  return (
    <section className='fixed h-screen w-screen top-0 right-0 left-0 bg-black/65 flex items-center justify-center z-30 backdrop-blur-sm'>
        <div className='h-[80%] w-[75%] sm:h-[26rem] sm:w-96 sm:px-3 bg-white/10  border-[.5px] border-orange-400 rounded-lg flex flex-col justify-between'>
            <div className='px-2 py-3 flex items-center justify-between'>
                <h1 className='text-xl font-medium'>{loginForm ? "Login" : "Sign up"}</h1>
                <MdCancel onClick={() => {close(false)}} className='text-2xl' />
            </div>
            {loginForm ? "" : (
                <form className='px-6 flex flex-col gap-2'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='username' className='text-sm'>Username *</label>
                        <input id="username" onChange={handleLoginForm} type='text' name="username" placeholder='Enter username'required className='text-sxl px-[12px] py-[4px] outline-none rounded-md bg-black/50' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='name' className='text-sm'>Name *</label>
                        <input id="name" onChange={handleLoginForm} type='text' name="name" placeholder='Enter full name'required className='text-sxl px-[12px] py-[4px] outline-none rounded-md bg-black/50' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='email' className='text-sm'>Email *</label>
                        <input id="email" onChange={handleLoginForm} type='text' name="email" placeholder='Enter username'required className='text-sxl px-[12px] py-[4px] outline-none rounded-md bg-black/50' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='password' className='text-sm'>Password *</label>
                        <input id="password" onChange={handleLoginForm} type='text' name="password" placeholder='Create new password'required className='text-sxl px-[12px] py-[4px] outline-none rounded-md bg-black/50' />
                    </div>
                    <button className='bg-orange-500 py-1 rounded-md self-start mt-4 px-3'>
                        Join with me
                    </button>
                </form>
            )}
            <div className='px-2 py-3 flex items-center justify-between'>
                <p className='text-sm font-thin'>{loginForm && "forgot Password"}</p>
                <button onClick={()=> {setLoginForm(pre => !pre)}}>{loginForm ? "Sign Up" : "Login"}</button>
            </div>
        </div>
    </section>
  )
}

export default LoginCard