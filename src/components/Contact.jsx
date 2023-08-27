import React, { useState }  from 'react'
import { validateEmail } from '../utils/helpers';

// need to add name= for React smooth scroll 
// need method POST and action for getform.io to receive submissions
const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#1D1E1F] flex justify-center items-center p-4'>
        <form method="POST" action='https://getform.io/f/6edc435c-3bbd-45a0-8b12-dbb62e93bc6b' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#FADE4B] text-gray-300'>Contact</p>
                <p className='py-4 text-gray-300 '>Thanks for stopping by! I built this site to showcase my proficiency in leveraging the following technologies: HTML, CSS, JavaScript, React, TailwindCSS. This site is also mobile friendly!</p>
                <p className='py-4 text-gray-300 '>For any professional inquiries you can fill out the form below or shoot me an email - <a href="mailto:cruzn@uw.edu"> cruzn@uw.edu</a></p>
            </div>
            <input type='text' placeholder='Name' name='name' className='p-2 bg-[#ccd6f6]'/>
            <input type='email' placeholder='Email' name='email' className='my-4 p-2 bg-[#ccd6f6] invalid:text-red-500'/>
            <textarea placeholder='Message' name='message' rows="10" className='p-2 bg-[#ccd6f6]'></textarea>
            <button className='text-white border-2 bg-black border-[#FADE4B] rounded-full hover:border-white hover:shadow-md hover:shadow-[#F8E167] duration-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact