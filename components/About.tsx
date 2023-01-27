import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const about:string = "WHAT I DO/>";

export default function About({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen font-poppins flex flex-col max-w-7xl px-10 relative text-center md:text-left md:flex-row justify-evenly mx-auto items-center'>
      <h3 className='absolute top-12 max-[360px]:top-3 uppercase text-center tracking-[18px]  md:text-xl text-gray-300 '>{about}</h3>

        <motion.img 
        initial={{
          x: -200,
          opacity:0,
        }}
        whileInView={{
          x:0,
          opacity:1
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration:1.2
        }}
        src='https://demiladeala.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-image.822e391c.png&w=384&q=75'
        className='-mb-12 md:mb-0 md:left-28 relative flex-shrink-0 w-[150px] h-[230px] rounded-2xl bg-center object-cover bg-gradient-to-tl from-white via-stone-100 p-4 to-rose-100 md:rounded-lg md:w-[200px] md:h-[300px] md:p-8 max-[360px]:mt-[300px]'
      />
      
        <div className='space-y-3 px-0 md:px-48 max-[360px]:mt-28'>
          <p className='text-base text-gray-300 max-[375px]:text-sm'>Hello, my name is Oluwademilade, and I'm a front-end developer from Nigeria studying at the Federal University of Technology in Akure (FUTA).  I appreciate solving difficulties in web development, and I communicate well with my clients to bring out their ideas in the best way possible.</p>
        </div>

    </motion.div>
  )
}

{/* <div class="font-body h-[250px] w-44 m-auto mt-24 rounded-xl text-white p-8 bg-gradient-to-tl from-white via-stone-100 to-rose-100 md:mt-10 md:mr-10 md:w-[20%] md:h-[20%]"><img srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-image.822e391c.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-image.822e391c.png&amp;w=384&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-image.822e391c.png&amp;w=384&amp;q=75" width="180" height="303" decoding="async" data-nimg="1" class="bg-center relative w-full" loading="lazy" style="color: transparent;"></div> */}