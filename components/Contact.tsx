import { motion } from 'framer-motion';
import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

type Props = {}
const contactHeader:string = "CONTACT ME/>";

export default function Contact({}: Props) {
  const { 
    register, 
    handleSubmit, 
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = FormData => {
    window.location.href = `mailto:demiladeala@gmail.com?&body=Hi, my name is ${FormData.name}.${FormData.message} (${FormData.email})`;
  };


  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 text-gray-300 justify-evenly mx-auto items-center'>
             <h3 className='absolute top-12 max-[360px]:top-3 uppercase text-center tracking-[18px]  md:text-xl text-gray-300 '>{contactHeader}</h3>

             <div className='flex flex-col space-y-10'>
                <h4 className='text-center sm:text-lg'>
                I'm available for full-time or contract work. Contact me so we can discuss.
                </h4>

            <div className='flex items-center  justify-center'>
                <BsFillTelephoneFill className='w-7 animate-pulse'/>
                <p className='flex'>07013071320, 07063634353</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-full mx-auto'>
                <input {...register('name')} className='contactInput rounded-md' placeholder='Your Name' type="text" />
                <input {...register('email')} className='contactInput rounded-md' placeholder='Email' type="email" />
                <textarea {...register('message')} placeholder='Message..' className='contactInput rounded-md'/>
                <button type='submit' className='bg-orange-400/50 py-5 px-10 text-black font-bold text-lg rounded-md hover:text-gray-300 hover:border hover:border-orange-400/50 hover:bg-orange-400/5'>Submit</button>
            </form>

        </div>
    </motion.div>
  )
}