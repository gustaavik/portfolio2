import React from 'react'
import { Button } from '../ui/button'
import { FaGithub } from "react-icons/fa";
import { AiOutlineSelect } from "react-icons/ai";
import Link from 'next/link';
import ProjectElement from '@/types/ProjectElement';

const Project = ({ proj }: { proj: ProjectElement }) => {
    return (
        <div className='flex flex-col bg-gray-100 p-6 rounded-lg hover:bg-gray-200' style={{ transition: 'all 0.2s ease-in' }}>
            <div className='flex flex-row justify-between'>
                <h1 className='text-xl font-bold'>{proj.title}</h1>
                <div className='flex flex-row gap-2'>
                    {proj.github && (
                        <Link target='_blank' href={proj.github}>
                            <FaGithub size={24} />
                        </Link>
                    )}
                    {proj.link && (
                        <Link target='_blank' href={proj.link}>
                            <AiOutlineSelect size={25} color="blue" />
                        </Link>
                    )}
                </div>
            </div>
            <p className='py-2'>{proj.description}</p>

            <ul className='flex overflow-scroll gap-2 py-2 items-end h-full' style={{ scrollbarWidth: "none" }}>
                {proj.tags.map((tag, index) => {
                    return <li key={index} className='border-gray-400 border  px-4 py-1 rounded-full text-xs w-fit h-fit'>{tag}</li>
                })}
            </ul>
            {/* <p className='text-sm text-center mt-4 text-gray-400'>click to learn more</p> */}
        </div>
    )
}

export default Project