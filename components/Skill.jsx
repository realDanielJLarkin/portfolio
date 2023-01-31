import { motion } from 'framer-motion'

import skills from '../project-data/skills'

function Skill() {
    return (
        <>
            {skills.map((skill) => (
                <div key={skill.title} className=' group relative flex cursor-pointer m-3 lg:m-1 xl:m-3'>
                    <motion.img src={skill.source} className='object-cover w-20 h-20 lg:w-32 lg:h-32 xl:h-32 xl:w-32' />
                </div>
            ))}



        </>

    )
}

export default Skill