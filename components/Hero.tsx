import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Typed from 'react-typed'
import { Cursor } from 'react-simple-typewriter'
import Link from 'next/link'
import heroimage from '../public/my--image.png'

type Props = {}

export default function Hero({}: Props) {
  return (
    <motion.div
    initial={{
      opacity:0
    }}
    animate={{
      opacity:1
    }}
    transition={{
      delay:6,
      duration:6
    }}
    className='h-screen relative flex flex-col space-y-8 sm:items-center justify-center'>
    <div className=''>
      <div className=' h-40 w-40 bg-center object-cover mx-auto bg-gradient-to-br from-blue-400 to-gray-50 rounded-full  duration-75'>
        <motion.div
        initial={{
          y:10
        }}
        animate={{
          y:5
        }}
        transition={{
          repeat: Infinity,
          duration:7, type:'tween'
        }}
        className='animate-pulse duration-[9s]'><Image className='bg-center m-auto ' src={heroimage} width={130}  alt='portfolio cartoon'/></motion.div>
      </div>

      <h1 className=' text-2xl text-center max-[375px]:text-sm sm:text-3xl font-semibold px-10'>
        <span className='mr-3'>
        <Typed 
          strings={[
            "Hi, I'm Oluwademilade Ala",
            "A Frontend Developer",
            "I design Web apps",
          ]}
          typeSpeed={150}
          backSpeed={100}
          showCursor={false}
          loop
        />
        </span>
        <Cursor cursorColor='#f7ab0a'/>
      </h1>

      <div className='pt-5 w-[95%] flex flex-col sm:flex-row m-auto items-center text-center'>
        <Link href='#about'><button className='heroButton text-lg'>About</button></Link>
        <Link href='https://docs.google.com/document/d/1s-R3jbyEyK6frRc80coE_m4zfRdz1cKxoX2ZSwirsQ0/edit?usp=sharing'><button className='heroButton text-lg'>Resume</button></Link>
        <Link href='#portfolio'><button className='heroButton text-lg flex flex-row'>Portfolio<span></span>📁</button></Link>
        <Link href='#contact'><button className='heroButton text-lg'>Contact</button></Link>   
      </div>
    </div>

   </motion.div>
  )
}