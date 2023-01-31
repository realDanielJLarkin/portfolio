import { motion, MotionValue } from 'framer-motion'
import DOMPurify from 'dompurify'
import projects from '../project-data/projects'
import Project from './Project'

function Projects() {

    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} className='min-h-screen overflow-scroll-y flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000] xl:px-10 justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
            <div className="relative top-32 md:top-36 grid grid-cols-1 md:flex md:flex-row md:flex-wrap md:max-w-7xl md:mx-auto md:justify-center gap-6">

                {projects.map((project) => (
                    <Project key={project.id} project={project} />
                ))
                }
            </div>
        </motion.div>
    )
}

export default Projects