import React from 'react'
import { useState, useEffect } from 'react';
import { BsFileArrowUpFill } from 'react-icons/bs';

type Props = {}

export default function Button({}: Props) {

    const [backToTopButton, setBackToTopButton] = useState(false);

    const scrollUp = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setBackToTopButton(true);
        } else {
          setBackToTopButton(false);
        }
      });
  
      return () => {
        window.removeEventListener("scroll", () => {});
      };
    }, []);



  return (
  <>
    {backToTopButton && (
        <div onClick={scrollUp}  className='text-orange-400 rounded-lg p-1  items-center justify-center z-50 absolute flex bottom-5 right-2 cursor-pointer'>
            <BsFileArrowUpFill size={35}/>
        </div>
    )}
  </>
)
}

/*    

  return (
    <>
     
    </>  */