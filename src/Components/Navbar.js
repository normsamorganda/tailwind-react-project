import React from 'react'
import {AiOutlineClose, AiOutlineMenu}  from 'react-icons/ai';
import {useState, useEffect} from 'react';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [navHidden, setnavHidden] = useState(false);

    const handleNav = () => setNav(!nav);
    const handleResize = () => window.innerWidth > 768 ? setnavHidden(true) : setnavHidden(false);
      useEffect(() => { window.addEventListener("resize", handleResize) })


  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
        <h1 className=' w-full text-3xl font-bold text-[#00df9a]'>NA Data-Solution</h1>
        <ul className='hidden md:flex'>
            <li className='p-4 hover:border-b-2 cursor-pointer'>Home</li>
            <li className='p-4 hover:border-b-2 cursor-pointer'>Contact</li>
            <li className='p-4 hover:border-b-2 cursor-pointer'>Company</li> 
            <li className='p-4 hover:border-b-2 cursor-pointer'>Resources</li>
            <li className='p-4 hover:border-b-2 cursor-pointer'>About</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineMenu side={20}/>  : <AiOutlineClose side={20} /> }
        </div>
        <div className={navHidden ? 'hidden' : 'block'}>
        <div className= {!nav ? 'fixed left-[-100%]' : 'bg-black fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-90 ease-in-out duration-500'}>
        <h1 className=' w-full text-3xl font-bold text-[#00df9a] m-4'>NAmorganda.</h1>
        <ul className='p-24 uppercase'>
            <li className='p-4 border-gray-400'>Home</li>
            <li className='p-4 border-gray-400'>Contact</li>
            <li className='p-4 border-gray-400'>Company</li> 
            <li className='p-4 border-gray-400'>Resources</li>
            <li className='p-4 border-gray-400'>About</li>
        </ul>
        </div>
        </div>
       
    </div>
  )
}

export default Navbar
