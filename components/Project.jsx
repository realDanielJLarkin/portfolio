import React from 'react'

import Image from 'next/image'


function Project({ project }) {
    return (

        <div className="max-w-sm card rounded overflow-hidden shadow-lg bg-white">
            <Image className="w-full" src={project.image} alt={project.title} width={500} height={500} />
            <div className="card-body px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.title}</div>
                <p className="text-gray-700 text-base">{project.description}</p>

                <div className='card-action justify-start flex gap-3 flex-wrap items-start'>
                    {project.tags.map(tag => (
                        <div key={tag} className="badge bg-green-700 border-n">{tag}</div>
                    ))}
                </div>
                <div className="card-actions justify-end">
                    <a href={project.link} target='_blank' className='link link-info'>Visit {project.title}</a>
                </div>
            </div>
        </div>

    )
}

export default Project