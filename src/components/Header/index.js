import arrow from '../../images/icon-arrow-down.svg'
import React from 'react'
import Navbar from '../Navbar'

const Header = () => {
  return (
    <header className="w-full min-w-[375px]">
        <Navbar/>
        <section id='hero' className="grid grid-cols-1 place-content-center gap-y-14 justify-items-center md:h-screen h-[70vh] md:bg-imageheaderdesktop bg-imageheadermobile bg-cover bg-center">
            <div className="md:relative md:-top-24 text-neutral-white md:tracking-[1rem] tracking-[0.5rem] place-self-center">
              <p className="font-fraunces font-black md:text-6xl text-5xl text-center">WE ARE CREATIVE</p>
            </div>
            <div className="md:relative md:-top-12 transition duration-500 animate-[bounce-slow_2s_ease-in-out_infinite]">
              <a href='#brandinfo' aria-label='continue'>
                  <img src={arrow} alt="iconarrow"/>
              </a>
            </div>
        </section>
    </header>
  )
}

export default Header