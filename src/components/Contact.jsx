import React from 'react'

// need to add name= for React smooth scroll 
// need method POST and action for getform.io to receive submissions
const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center p-4'>
        <form method="POST" action='https://getform.io/f/6edc435c-3bbd-45a0-8b12-dbb62e93bc6b' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='py-4 text-gray-300 '>Submit the form below or send me an email - @gmail.com</p>
            </div>
            <input type='text' placeholder='Name' name='name' className='p-2 bg-[#ccd6f6]'/>
            <input type='email' placeholder='Email' name='email' className='my-4 p-2 bg-[#ccd6f6]'/>
            <textarea placeholder='Message' name='message' rows="10" className='p-2 bg-[#ccd6f6]'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact