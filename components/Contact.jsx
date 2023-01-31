import { motion } from 'framer-motion'

function Contact() {
    return (
        <div className='min-h-screen bg-black overflow-scroll-y flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000] xl:px-10 justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-white text-2xl'>Contact</h3>
            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center text-white'>Let's work together.</h4>
                <form className='flex flex-col space-y-2 w-fit mx-auto' action="">
                    <div className='flex space-x-2'>
                        <input className='customContactInput focus:border-white text-white' type="text" placeholder='Name' />
                        <input className='customContactInput focus:border-white text-white' type="email" placeholder='Email' />
                    </div>
                    <input className='customContactInput focus:border-white text-white' type="text" placeholder='Subject' />
                    <textarea className='customContactInput focus:border-white text-white' placeholder='Message' />
                    <button className='btn btn-outline text-white hover:bg-white hover:text-black font-bold'>Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Contact