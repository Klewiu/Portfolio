import React from 'react'

import HTML from '../assets/html.png'
import Django from '../assets/django-logo2.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import HTMX from '../assets/htmx.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 pt-[150px]'>

        {/* Container */}
        <div className='max-w-[900px] mx-auto flex flex-col justify-center w-full h-full'>
            <div className="sm:text-left pl-5">
                <p className='text-4xl font-bold inline border-b-4 border-[#ff9869ff]'>Skills</p>
                <p className='py-5 text-[#8892b0]'>These are technologies that I have worked with:</p>
            </div>

            <div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-6 text-center p-6'>
                
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={Django} alt="HTML" />
                    <p className='my-4'>Django</p>
                </div>
                
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 '>
                    <img className='w-20 mx-auto my-10' src={HTMX} alt="HTML" />
                    <p className='my-4'>HTMX</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="HTML" />
                    <p className='my-4'>React</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="HTML" />
                    <p className='my-4'>Tailwind</p>
                </div>
                

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={CSS} alt="HTML" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="HTML" />
                    <p className='my-4'>JavaScript</p>
                </div>
              
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={GitHub} alt="HTML" />
                    <p className='my-4'>GitHub</p>
                </div>
                
               
            </div>

        </div>
    </div>
  )
}

export default Skills