import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

function Header() {
    return (
        <header className='hidden md:flex justify-between items-start sticky top-0 max-w-7xl mx-auto z-20 p-5 xl:items-center'>
            <motion.div initial={{ x: -500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className='flex flex-row items-center'>
                <SocialIcon url='https://github.com/realDanielJLarkin' fgColor='gray' bgColor='transparent' />
                <SocialIcon url='https://www.linkedin.com/in/daniel-larkin-a4a517114/' fgColor='gray' bgColor='transparent' />
            </motion.div>
            <motion.div initial={{ x: 500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className='flex flex-row items-center'>
                {/* <SocialIcon className='cursor-pointer' fgColor='gray' bgColor='transparent' network='email' /> */}
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Lrkn.DEV</p>
            </motion.div>
        </header>
    )
}

export default Header