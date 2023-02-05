import React from 'react'
import { motion } from 'framer-motion'

function About() {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} className='flex flex-col md:flex-row relative text-center md:text-left min-h-screen max-w-7xl px-10 justify-evenly mx-auto items-center'>

            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>



            <div className='relative top-36 md:static max-w-3xl mx-auto'>
                <p className='text-base tracking-wide '>Thanks for checking out my website! By now you can see that I'm a web developer with a passion for creating beautiful & responsive
                    websites and web applications. Not only am I proficient in HTML, CSS, and JavaScript, but also React, NodeJS, Express, and MongoDB. With these technologies I'm able to
                    build any website or application you can think of, no matter how complex! Additionally, I also have experience with CMS services like Wordpress,
                    Shopify, and Contenful, perfect platforms for building bueatiful blogs, e-commerce, and business websites that are user friendly, both for you and your customers!
                </p>
                <br />
                <p className='text-base tracking-wide '> Outside of software development, I hold a BA in Political Science from the University of Iowa and a MA in
                    Strategic Intelligence & Analysis from Northeastern University. My interests include geopolitics, international relations, and learning new langauges (not just programming langauges!).
                    In my free time, you'll usually find me making music, if not listening to it, or reading about the latest international crisis situation.
                </p>
            </div>
        </motion.div>
    )
}

export default About