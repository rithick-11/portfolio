import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex px-4 py-2  md:px-8 md:py-4 bg-white/5 justify-between mt-6 rounded-full'>
        <h1 className='text-[16px] md:text-xl font-medium'>Rithick</h1>
        <ul className='hidden md:flex w-1/2 justify-around'>
            <li><a href='#sdsdf'>Home</a></li>
            <li><a href='#sdsdf'>Bio</a></li>
            <li><a href='#sdsdf'>Skills</a></li>
            <li><a href='#sdsdf'>Education</a></li>
            <li><a href='#sdsdf'>Projects</a></li>
        </ul>
    </nav>
  )
}

export default Navbar