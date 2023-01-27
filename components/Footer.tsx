import Link from 'next/link';
import React from 'react'
import {AiFillGithub , AiFillTwitterCircle, AiOutlineMail} from 'react-icons/ai'

type Props = {
}

export default function Footer({}: Props) {
  return (
    <footer className='p-4'>
        <p className='text-center text-gray-400 text-sm sm:text-base pb-4'>Copyrights reserved Oluwademilade Ala</p>  
        <div className='flex flex-row gap-4 text-gray-400 justify-center cursor-pointer'>
         <Link href='https://github.com/Demiladeala'><AiFillGithub size={25} className=' hover:text-orange-400/50'/></Link>
         <Link href='https://twitter.com/AlaDemjosh?'><AiFillTwitterCircle size={25} className=' hover:text-orange-400/50'/></Link>   
         <Link href='mailto:demiladeala@gmail.com'><AiOutlineMail size={25} className=' hover:text-orange-400/50'/></Link>   
        </div>
        
    </footer>
  )
}