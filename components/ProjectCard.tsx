import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

type Props = {
  data: any
}

export default function ProjectCard({data}: Props) {
  return (
    <div className='w-screen flex flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-20 md:mt-20 h-screen' key={data.id}>
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
      <Image width={50} height={10} alt='technologies' src={data.stack} className='flex justify-center items-center mx-auto pt-4'/>
      <p className='text-base text-center  text-gray-300 pt-3 max-[375px]:hidden'>{data.description}</p>
      </Link>
    </div>
  )
}