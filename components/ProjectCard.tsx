import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {GoLinkExternal} from 'react-icons/go'
import {AiOutlineGithub} from 'react-icons/ai'

type Props = {
  data: any
}

export default function ProjectCard({data}: Props) {
  return (
   <div key={data.id}>
    <Link  href={data.link}>
      <motion.div
      initial={{
        y: 300,
        x:50,
        opacity: 0,
      }}
      transition={{duration: 1.2, type:'spring', stiffness:200}}
      whileInView={{opacity:1 , y:0,x:0}}
      viewport={{once:true}}>
        
      <Image src={data.picture} width={200} height={100} alt='projects' className='w-full h-full bg-center object-cover hover:bg-opacity-25 rounded-t-md'/>
      <div className='bg-white/5 rounded-b-lg font-sans shadow-gray-500 shadow-sm'>
      <h2 className='text-center py-2 text-white uppercase'>{data.name}</h2>
      <p className='w-[95%] m-auto text-center py-4 h-4'>{data.description}</p>
      <h2 className='px-10 w-[95%] m-auto text-sm text-gray-400 flex justify-end'>{data.stack}</h2>
        <div className='flex flex-row gap-3 w-[95%] px-10 pb-4 m-auto mt-4 justify-end'>
          <Link href={data.source}><AiOutlineGithub className=' cursor-pointer' /></Link>
          <Link href={data.link}><GoLinkExternal className=' cursor-pointer'/></Link>
        </div>
      </div>
      </motion.div>
      </Link>
  </div>
  )
}

/*
 <div className='relative w-screen flex flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-20 md:mt-20 h-screen' key={data.id}>
      <Link href={data.link}>
      <motion.div
      className='flex justify-center'
      initial={{
        y: -300,
        opacity: 0,
      }}
      transition={{duration: 1.2}}
      whileInView={{opacity:1 , y:0}}
      viewport={{once:true}}
      >
      <Image width={500} height={10} alt='project' src={data.picture}/>
      </motion.div>
      <h1 className='text-2xl font-semibold text-center pt-4'>{data.name}</h1>
      <Image width={20} height={10} alt='technologies' src={data.stack} className='flex justify-center items-center mx-auto pt-4'/>
      <p className='text-base text-center text-gray-100 pt-3 max-[375px]:hidden'>{data.description}</p>
      </Link>

      <motion.div 
      initial={{
        x:20,
        opacity:1
      }}
      whileInView={{
        x:-50,
        opacity:0
      }}
      transition={{
        duration:1,
        delay:1,
        repeat:Infinity,
      }}
      className='relative'
      >
        <MdOutlineSwipe className='text-orange-400' size={30}/>
      </motion.div>
    </div>


*/