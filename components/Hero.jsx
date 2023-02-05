import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

function Hero() {

    const [text, count] = useTypewriter({
        words: [
            'Fullstack Software Engineer.',
            'Working in HTML/CSS & JS...',
            'React, Node, Wordpress, & more',
        ],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div className='flex flex-col text-center h-screen space-y-8 justify-center overflow-hidden mx-auto'>
            <h1 className='text-1xl text-gray-700 tracking-widest uppercase font-mono font-thin'>{text}<Cursor cursorColor='#F7AB0A' /></h1>
            <h2 className='text-4xl md:text-7xl text-[#F7AB0A] md:tracking-[15px] uppercase font-mono tracking-wide md:font-thin'>Daniel Larkin</h2>
            <div className="pt-5">
                <div className=''>
                    <button className='px-3 py-2 border border-[#242424] rounded-full uppercase text-xs align-middle tracking-widest text-gray-500 transition-all mr-1 hover:bg-black hover:text-white'><a href="#about">About</a></button>
                    <button className='px-3 py-2 border border-[#242424] rounded-full uppercase text-xs align-middle tracking-widest text-gray-500 transition-all ml-1 mr-1 hover:bg-black hover:text-white'><a href="#skills">Skills</a></button>
                    <button className='px-3 py-2 border border-[#242424] rounded-full uppercase text-xs align-middle tracking-widest text-gray-500 transition-all ml-1 mr-1 hover:bg-black hover:text-white'><a href="#projects">Projects</a></button>
                    <button className='px-3 py-2 border border-[#242424] rounded-full uppercase text-xs align-middle tracking-widest text-gray-500 transition-all ml-1 hover:bg-black hover:text-white'><a href="#contact">Contact</a></button>
                </div>
            </div>
        </div>
    )
}

export default Hero