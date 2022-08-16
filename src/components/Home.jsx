import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-[#ff9869ff]'> Hi my name is</p>
          <h1 className='tet-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Jakub Klewicki</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'> I am full-stack developer</h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>
            I am self-taught programmer with passion for web development. 
            Currently i am working on projects with Django and React.
            Please contact me if you are interested in my work.
          </p>
          <div>
          <Link to='work' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ff9869ff] hover:border-[#ff9869ff]'>View work 
               <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />  
               </span>
            </button>
          </Link>
          </div>
        </div>
   
    </div>
  )
}

export default Home