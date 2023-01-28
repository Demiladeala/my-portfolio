import React from 'react'
import { motion } from 'framer-motion'
import { projects } from './Projectsdata';
import ProjectCard from './ProjectCard';

type cards = {

}

const project:string = "MY PROJECTS/>";

export default function Portfolio({}: cards) {

  const projectMap = projects.map((obj: any, index: number) => (
    <ProjectCard data={obj}/>
  ))

  return (
    <>
    <h3 className='relative top-16 sm:top-8 max-[360px]:top-24 uppercase text-center tracking-[18px]  md:text-xl text-gray-100'>{project}</h3>
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>

        <div className='w-[80%] mx-auto mt-28 grid grid-cols-1 sm:grid-cols-2 gap-6 scrollbar-none overflow-hidden snap-x snap-mandatory z-20'>
          {projectMap}
        </div>
    </motion.div>
    </>
  )
} 