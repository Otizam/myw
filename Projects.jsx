import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import propertyImg from "../public/assets/projects/property.jpg"
import ProjectItem from "./ProjectItem"
import cryptoImg from "../public/assets/projects/crypto.jpg"
import netflixImg from "../public/assets/projects/netflix.jpg"
import twitchImg from "../public/assets/projects/twitch.jpg"


const Projects = () => {
  return (
    <div id='projects'  className='w-full'>
     <div className='max-w-[1240] mx-auto px-2 py-16'>
       <p className='text-wl tracking-widest uppercase text-[#5651e5]'>Projects</p>
       <h2 className='py-4'>What I've Built</h2>
       <div className='grid md:grid-cols-2 gap-8'>   
        <ProjectItem 
        title="Property Finder" 
        backgroundImg={propertyImg} 
        projectUrl="/property"      
        />
         <ProjectItem 
        title="Crypto App" 
        backgroundImg={cryptoImg} 
        projectUrl="/property"      
        />
         <ProjectItem 
        title="property finder" 
        backgroundImg={netflixImg} 
        projectUrl="/property"      
        />
         <ProjectItem 
        title="Property Finder" 
        backgroundImg={twitchImg} 
        projectUrl="/property"      
        />
     </div>
    </div>
 </div>

 
  )
}

export default Projects