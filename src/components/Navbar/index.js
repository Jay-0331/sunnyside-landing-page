import React from 'react'
import { useState } from 'react';

const Navbar = () => {
    const [isEnabled, setisEnabled] = useState(false);

    

    window.addEventListener('resize', () => {
        if(window.screen.width > 768){
            setisEnabled(false)
        }
    })

    const handleclick = () => {
        setisEnabled(!isEnabled)
    }
    return (
        <nav className="absolute w-full z-20 min-w-[375px]">
            <div className="px-8 mx-auto pt-8 pb-2 flex justify-between">
                <h1 className="font-poppin text-3xl text-neutral-white h-[60px] flex items-center" aria-label='logo'>sunnyside</h1>
                <div className="hidden md:flex space-x-10 items-center text-lg text-neutral-white">
                    <a href='/' className="font-barlow text-opacity-70 hover:text-black transition duration-500" aria-label='About link'>About</a>
                    <a href='/' className="font-barlow text-opacity-70 hover:text-black transition duration-500" aria-label='services link'>Services</a> 
                    <a href='/' className="font-barlow text-opacity-70 hover:text-black transition duration-500" aria-label='projects link'>Projects</a>
                    <button className="font-fraunces bg-white text-black py-4 px-8 rounded-full hover:bg-opacity-30 hover:text-white transition-all duration-500" aria-label='contact button'>CONTACT</button>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={handleclick} aria-hidden='true'>
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fill-rule="evenodd"/></svg>
                    </button>
                </div>
            </div>
            
            <div className={`md:hidden ${ isEnabled ? '' : 'hidden'}`}>
                <div className="clip h-8 bg-white mx-6"/>
                <div className="flex flex-col items-center text-neutral-dark-grayish-blue bg-white mx-6 space-y-6 py-12 text-xl">
                    <a href='/' className="font-barlow hover:text-black transition duration-500" aria-label='About link'>About</a>
                    <a href='/' className="font-barlow hover:text-black transition duration-500" aria-label='services link'>Services</a> 
                    <a href='/' className="font-barlow hover:text-black transition duration-500" aria-label='projects link'>Projects</a>
                    <button className="font-fraunces bg-primary-yellow text-lg text-black py-4 px-8 rounded-full hover:bg-opacity-50 transition-all duration-500" aria-label='contact button'>CONTACT</button>
                </div>
            </div>
        </nav>
  )
}

export default Navbar;