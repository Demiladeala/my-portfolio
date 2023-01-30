import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'


type Props = {}

export default function HEADER({}: Props) {
  return (
    <header className = 'sticky top-0 p-5 flex items-center justify-between max-w-4xl mx-auto z-50'>
        <motion.div className='flex items-center'
        initial={{
            x: -500,
            opacity:0,
            scale:0.5
        }}
        animate={{
            x: 0,
            opacity:1,
            scale:1
        }}
        transition={{
            delay:3,
            duration:3.5
        }}
        viewport={{
            once: true
        }}
        >
                            {/*Logo */}
            <motion.div 
            className=' cursor-pointer flex flex-row text-gray-200'
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration: 1, repeat:1 }}
            >
            <span className='relative text-3xl ml-4 right-2 font-satisfy italic'>Ala</span>

            </motion.div>

        </motion.div> 
        
       
        <motion.div className='flex flex-row items-center text-gray-200  cursor-pointer'
            initial={{
                x:500,
                opacity:0,
                scale:0.5
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition={{delay:3,duration:3.5}}
            viewport={{
                once:true
            }}
        >
        <Link href='https://www.linkedin.com/in/oluwademilade-ala-010715239'>
            <SocialIcon
            className=' cursor-pointer'
            network='linkedin'
            fgColor='white'
            bgColor='transparent'
            />
           <p className=' cursor-pointer hidden md:inline-flex text-sm text-gray-200'>Let's Chat</p>
           </Link>
            </motion.div>

    </header>
  )
}