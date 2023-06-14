import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineBars, AiOutlineClose, AiOutlineGithub, AiTwotoneMail } from 'react-icons/ai';
import { FaLinkedin } from "react-icons/fa"
import { BsGithub, BsPersonLinesFill } from "react-icons/bs";
import { useRouter } from 'next/router';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3')
  const [linkColor, setLinkColor] = useState('#1f2937')
  const router = useRouter()

  useEffect(() => {
    if (
      router.asPath === '/property' ||
      router.asPath === '/crypto' ||
      router.asPath === '/netflix' ||
      router.asPath === '/twitch'
    ) {
      setNavBg('transparent')
      setLinkColor('#ecf0f3')
    } else {
      setNavBg('#ecf0f3')
      setLinkColor('#1f2937')
    }
  }, [router])

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
    return () => {
      window.removeEventListener("scroll", handleShadow);
    }
  }, []);

  return (
    <div
      style={{ background: navBg }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href='/'>
          <Image
            src="/../public/assets/navLogo.png"
            alt='/'
            width="125"
            height="50"
          />
        </Link>
        <div>
          <ul style={{ color: linkColor }} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineBars size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
       >

        <div className={ 
        nav
          ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-8 ease-in duration-500'
          : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
        }>
           <div>
            <div className="flex w-full items-center justify-between">
      
          <Image 
                src="/../public/assets/navLogo.png" 
                alt="/"
                width="87" 
                height="35"
              />
        
               <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>
           </div>

           <div className="border-b border-gray-300 my-4">
            <p className=""> 
            Let's build something legendary together
            </p>
         </div>

         <div className="py-4 flex flex-col">
            <ul className="uppercase">
            <li onClick={()=> setNav(false)} className='py-4 text-sm'>
                  <Link href='/'>Home</Link>
            </li>
            <li onClick={()=> setNav(false)} className='py-4 text-sm'>
                  <Link href='/#about'>About</Link>
            </li>
            <li onClick={()=> setNav(false)} className='py-4 text-sm'>
                  <Link href='/#skills'>Skills</Link>
            </li>
            <li onClick={()=> setNav(false)} className='py-4 text-sm'>
                  <Link href='/#projects'>Projects</Link>
            </li>
            <li onClick={()=> setNav(false)} className='py-4 text-sm'>
                  <Link href='/#contact'>Contact</Link>
            </li>
            </ul>
          
            <div className="pt-6">
              <p className="uppercase tracking-widest text-[#5651e5]">
              Let's connect
              </p>
              <div className='flex items-center justify-between  w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer  hover:scale-105 ease-in-duration'>
                 <FaLinkedin />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer  hover:scale-105 ease-in-duration'>
                 <BsGithub />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer  hover:scale-105 ease-in-duration'>
                 <AiTwotoneMail />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer  hover:scale-105 ease-in-duration'>
                 <BsPersonLinesFill />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>  
  
   </div>
  );
     
}

export default Navbar