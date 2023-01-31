import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'

function Skills() {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }}
            className='min-h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000] xl:px-10 justify-center xl:space-y-0 mx-auto items-center'>

            <h3 className='absolute top-20 md:pl-6 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
            <div className='md:relative md:top-20 grid grid-cols-3 gap-3 md:grid-cols-4 md:gap-5'>
                <Skill />
            </div>
        </motion.div>
    )
}

export default Skills 