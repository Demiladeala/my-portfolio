import React from "react";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-center justify-between px-4 sm:px-40 bg-[#15151a] overflow-hidden  mx-auto z-50 ">
      <motion.div
        className="flex items-center"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
      >
        {/*Logo */}
        <motion.div
          className=" cursor-pointer flex flex-row text-gray-200"
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 1, repeat: 1 }}
        >
          <Link href="#hero">
            <span className="relative text-3xl ml-4 right-2 font-SpaceGrotesk italic">
              Ala
            </span>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-row items-center text-gray-200  cursor-pointer"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
      >
        <a
          href="mailto:demiladeala@gmail.com"
          className="flex items-center gap-2 cursor-pointer"
        >
          <AiOutlineMail size={24} className="text-gray-200" />
          <p className="cursor-pointer hidden md:inline-flex text-sm text-gray-200">
            Let's Chat
          </p>
        </a>
      </motion.div>
    </header>
  );
}
