import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import { AnimatePresence, motion } from 'framer-motion'
import {AiFillHtml5, AiFillGithub} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import{ SiTailwindcss, SiTypescript, SiJavascript, SiNextdotjs, SiFramer, SiReact} from 'react-icons/si'
import {GrGraphQl} from 'react-icons/gr'
import { useEffect, useState } from 'react'
import gsap from 'gsap'
import Footer from '../components/Footer'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'




const textVariants = {
  start: { color: "orange" },
  end: { color: "white" },
  end2: { color: "green" }
};


export default function Home() {
  const [color, setColor] = useState<keyof typeof textVariants>("start");
  useEffect(() => {
    const intervalId = setInterval(() => {
        setColor(color === "start" ? "end" : color === "end" ? "end2" : "start")
    }, 800);
    return () => clearInterval(intervalId);
  }, [color])


  useEffect(() => {
    const tl = gsap.timeline();
    tl
    .set('.wait-screen', {
      display: 'flex',
    })
    .to('.wait-screen', {
      duration: 1,
      opacity: 1,
    })
    .to('.wait-screen', {
      delay: 3,
      duration: 2,
      opacity: 0,
      onComplete: () => {
        tl.set('.wait-screen', {
          display: 'none'
        });
      }
    });
  }, []);
  


  return (
    <>

      <AnimatePresence mode='wait'>
      <motion.div
      exit={{
        opacity:0
      }}
      initial={{
        x:1,
        opacity:1
      }}
      animate={{
        x:10000,
        opacity:0,
        display:'none'  
      }}
      transition={{
        duration:6,
        delay:4.75,
        ease: 'easeInOut',
      }}
      className='wait-screen w-screen h-screen scroll-smooth bg-[rgb(27,27,28)] font-body absolute flex items-center justify-center z-50 scrollbar-thin scrollbar-track-gray-black scrollbar-thumb-black'> 
          <div>
            <motion.div
              className='ltext text-white text-base tracking-[4.5px] justify-center flex font-bold relative  pointer-events-none select-none min-[500px]:text-2xl sm:tracking-[15px]'>
              WHAT YOU CODING ? 
              {'<'}<motion.div
              variants={textVariants}
              animate={color} 
              transition={{ duration: 2 }}
              className=' animate-bounce duration-200 '>
              <SiTailwindcss size={50}/>
              </motion.div>&nbsp;{'/>'}
            </motion.div>

            <motion.div 
            transition={{speed:0.8}}
            className=' mt-8 flex flex-wrap gap-5 p-3 justify-center sm:flex-row'>
              <motion.div 
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay:0.1,type:'tween', duration:1.3}}
              className='w-[16%]'>
              <AiFillHtml5 className='text-red-500 ' size={50}/>
              </motion.div>

              <motion.div
                initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay:0.3,type:'tween', duration:1.5}}
              className='w-[16%]'>
              <DiCss3 className='text-blue-500 ' size={50}/>
              </motion.div>

              <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay:0.5,type:'tween', duration:1.7}}
              className='w-[16%] '>
              <SiTypescript className='text-blue-300 ' size={40}/>
              </motion.div>

              <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay:0.7,type:'tween', duration:1.9}}
              className='w-[16%] '>
              <SiJavascript className='text-yellow-600 ' size={40}/>
              </motion.div>

              <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay:0.9,type:'tween', duration:2.1}}
              className='w-[16%] '>
              <AiFillGithub className='text-white ' size={40}/>
              </motion.div>

              <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay:1,type:'tween', duration:2.3}}
              className='w-[16%] '>
              <SiNextdotjs className='text-white ' size={40}/>
              </motion.div>

              <motion.div 
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay:1.2,type:'tween', duration:2.5}}
              className='w-[16%] '>
              <SiFramer className='text-white ' size={40}/>
              </motion.div>

              <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay:1.4,type:'tween', duration:2.7}}
              className='w-[16%] '>
              <SiReact className='text-blue-300 ' size={40}/>
              </motion.div>

              <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay:1.6,type:'tween', duration:2.9}}
              className='w-[16%] '>
              <GrGraphQl className='text-pink-500 ' size={40}/>
              </motion.div>

              
              </motion.div>
          </div>
      </motion.div>
      </AnimatePresence>
  
    
      <div className='bg-[#15151a] scroll-smooth text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-orange-400/50 z-0'>
        <Head>
          <title>Oluwademilade's Portfolio</title>
          <meta name="description" content="Oluwademilade Ala frontend developer Portfolio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>


        <div className='scroll-smooth'>

          <Header/>

          <section id='hero' className=' snap-start'>
            <Hero/>
          </section>

          <section id='about' className='snap-center'>
            <About/>
          </section>

          <section id='portfolio' className='snap-start'>
          <Portfolio/>
          </section>

          <section id='contact' className='snap-start'>
            <Contact/>
          </section>


          <section id='footer' className='snap-center'>
            <Footer/>
          </section>

        </div>

      </div>
    </>
  );
};