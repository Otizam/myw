import React from 'react';
import Image from 'next/image';
import cryptoImg from '../public/assets/projects/crypto.jpg';
import {AiFillCaretRight,} from "react-icons/ai";

 const crypto = () => {
  return (
  <div className='w-full'>
    <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'> 
       </div>
      <Image
       className='aboslute z-1'
        layout="fill" 
        objectFit="cover" 
        src={cryptoImg} 
        alt="/"
        />
      <div className='aboslute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
        <h2 className='py-2'>Crypto App</h2>
        <h3>React Js / Tailwind / Firebase</h3>
      </div>
    </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
           <p>Project</p>
           <h2>Overview</h2>
           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
           All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
           </p>
           <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
           <button className='px-8 py-2 mt-4'>Code</button>
        </div>

        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
    <div className='p-2'>
      <p className='text-center font-bold pb-2'>Technologies</p>
      <div className='grid grid-cols-3 md:grid-cols-1'>
      <p className='text-gray-600 py-2 flex items-center'>
      <AiFillCaretRight className='pr-1' /> React
      </p>
      <p className='text-gray-600 py-2 flex items-center'>
      <AiFillCaretRight className='pr-1' /> Tailwind
      </p>
      <p className='text-gray-600 py-2 flex items-center'>
      <AiFillCaretRight className='pr-1' /> Javascript
      </p>
      <p className='text-gray-600 py-2 flex items-center'>
      <AiFillCaretRight className='pr-1' /> Google ad
      </p>
      <p className='text-gray-600 py-2 flex items-center'>
      <AiFillCaretRight className='pr-1' /> React
      </p>
      <p className='text-gray-600 py-2 flex items-center'>
      <AiFillCaretRight className='pr-1' /> React
      </p>
      </div>
    </div>
  </div>
     <Link href='/#crypto'>
        <p className='underline cursor-pointer'>Back</p>
      </Link>
    </div> 
  </div>
  )
}

export default crypto