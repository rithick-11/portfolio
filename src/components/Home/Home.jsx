import React from 'react'

const Home = () => {
  return (
    <section className='bg-slate-100/5 h-[80vh] sm:h-[60vh] mt-4 grid sm:grid-cols-2 font-mono'>
        <div className='flex items-center justify-center'>
            <img src="https://res.cloudinary.com/dwpmsw2i4/image/upload/v1680781580/rithickImg.jpg" alt="profile img" className='h-[180px] sm:h-[220px] md:h-[280px] rounded-full' />
        </div>
        <div className='flex flex-col items-center sm:items-start justify-center gap-3'>
            <h1 className='text-md '>Hi... this is</h1>
            <h1 className='text-3xl font-semibold'>RithickRoshan S</h1>
            <div className='flex flex-col sm:flex-row items-center gap-3'>
                <p>i am a</p>
                <h1>MERN Stack developer & Cyber Security Student</h1>
            </div>

        </div>
    </section>
  )
}

export default Home