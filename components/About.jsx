import React from 'react'
import { motion } from 'framer-motion'

function About() {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} className='flex flex-col md:flex-row relative text-center md:text-left h-screen max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

            <div className='space-y-5 max-w-3xl mx-auto'>
                <p className='text-sm text-base tracking-wide '>Thanks for checking out my website! By now you know that I am a web developer with a passion for creating beautiful & responsive
                    websites and web applications. Not only am I well versed in the fundementals of HTML, CSS, and JavaScript, I also have expereince working with React, NodeJS, Express, and
                    MongoDB, making me a fullstack developer capable of building any website or application you can think of, no matter how complex! Additionally, I also have experience with CMS services like Wordpress,
                    Shopify, and Webflow, perfect platforms for building bueatiful blogs, e-commerce, and business websites that are user friendly and allow YOU to manage and edit yourself!
                    Whether you're looking to level up your existing site, or wanting to build your first app, I'm here to help you get it done!</p>
            </div>
        </motion.div>
    )
}

export default About