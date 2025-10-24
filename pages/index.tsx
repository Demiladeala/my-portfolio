/** biome-ignore-all lint/correctness/useUniqueElementIds: <explanation> */
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import { AnimatePresence, motion } from "framer-motion";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiFramer,
  SiReact,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import React from "react";
import { useEffect, useState } from "react";
import gsap from "gsap";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const textVariants = {
  start: { color: "orange" },
  end: { color: "white" },
  end2: { color: "green" },
};

export default function Home() {
  const [color, setColor] = useState<keyof typeof textVariants>("start");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setColor(color === "start" ? "end" : color === "end" ? "end2" : "start");
    }, 800);
    return () => clearInterval(intervalId);
  }, [color]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.set(".wait-screen", {
      display: "flex",
    })
      .to(".wait-screen", {
        duration: 1,
        opacity: 1,
      })
      .to(".wait-screen", {
        delay: 3,
        duration: 3,
        opacity: 0,
        onComplete: () => {
          tl.set(".wait-screen", {
            display: "none",
          });
        },
      });
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          exit={{
            opacity: 0,
          }}
          initial={{
            x: 1,
            opacity: 1,
          }}
          animate={{
            x: 10000,
            opacity: 0,
            display: "none",
          }}
          transition={{
            duration: 6,
            delay: 4.75,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="wait-screen w-screen h-screen scroll-smooth bg-[rgb(27,27,28)] font-SpaceGrotesk absolute flex items-center justify-center z-[1000] scrollbar-none"
        >
          <div>
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,165,0,0.1)_0%,_transparent_70%)] blur-3xl" />

            {/* Floating Animated Circles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{
                repeat: Infinity,
                duration: 8,
                repeatType: "mirror",
              }}
              className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-orange-500/20 via-pink-500/10 to-purple-500/20 blur-3xl -top-32 -left-32"
            />

            {/* Intro Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="relative z-20 flex flex-col items-center text-center"
            >
              <h1 className="text-2xl sm:text-5xl font-bold tracking-[8px] sm:tracking-[12px] text-white">
                OLUWADEMILADE ALA
              </h1>

              <motion.div
                variants={textVariants}
                animate={color}
                transition={{ duration: 2 }}
                className="mt-4 flex items-center justify-center gap-2 text-orange-400"
              >
                {"<"}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="drop-shadow-[0_0_10px_rgba(255,165,0,0.7)]"
                >
                  <SiTailwindcss size={42} />
                </motion.div>
                {"/>"}
              </motion.div>

              <p className="text-gray-400 text-sm sm:text-base mt-3 tracking-[3px] animate-pulse">
                Initializing Interface...
              </p>
            </motion.div>

            {/* Floating Icons Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.8 }}
              className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-10 max-w-3xl z-20"
            >
              <motion.div whileHover={{ scale: 1.2 }} className="text-red-500">
                <AiFillHtml5 size={40} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} className="text-blue-500">
                <DiCss3 size={40} />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="text-yellow-400"
              >
                <SiJavascript size={35} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} className="text-blue-300">
                <SiTypescript size={35} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} className="text-white">
                <SiNextdotjs size={35} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} className="text-pink-500">
                <GrGraphQl size={35} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} className="text-blue-400">
                <SiReact size={35} />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="bg-[#15151a] scroll-smooth text-white h-screen overflow-x-hidden sm:scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-orange-400/50 z-0">
        <Head>
          <title>Oluwademilade's Portfolio</title>
          <meta
            name="description"
            content="Oluwademilade Ala frontend developer Portfolio"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="scroll-smooth">
          <Header />

          <section id="hero" className=" snap-start">
            <Hero />
          </section>

          <section id="about" className="snap-center">
            <About />
          </section>

          <section id="portfolio" className="snap-start">
            <Portfolio />
          </section>

          <section id="contact" className="snap-start">
            <Contact />
          </section>

          <section id="footer" className="snap-center">
            <Footer />
          </section>

          <section></section>
        </div>
      </div>
    </>
  );
}

/*
<Link href='#hero'>
          <motion.div
          className='text-orange-400 rounded-lg p-1  items-center justify-center z-49 absolute flex bottom-5 right-2 cursor-pointer'>
            <BsFileArrowUpFill size={35}/>
          </motion.div>
          </Link>

*/
