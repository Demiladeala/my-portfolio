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
    
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-12 max-[360px]:top-24 uppercase text-center tracking-[18px]  md:text-xl text-gray-300'>{project}</h3>

        <div className='relative w-full flex scrollbar-none md:overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-orange-400/50'>
          {projectMap}
        </div>
    </motion.div>
  )
} 