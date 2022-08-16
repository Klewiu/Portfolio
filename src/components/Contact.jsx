import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/bc06fdd2-567d-4692-b99a-c5ddb3938618" className='flex flex-col max-w-[600px] w-full'> 
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#ff9869ff] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or send me an email - kuba.klewicki@gmail.com </p>
            </div>
            <input className='bg-white p-2 ' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-white' type="email" placeholder='Email' name='email' />
            <textarea className='bg-white p-2' name="message" rows="8" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#ff9869ff] hover:border-[#ff9869ff] px-4 py-3 my-3 mx-auto flex items-center'> Contact Me</button>
        
        </form>


    </div>
  )
}

export default Contact