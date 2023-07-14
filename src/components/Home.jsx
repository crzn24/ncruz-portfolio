// run "rafce" to create a functional component using the ES7+ React plugin 
import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

// need name='home' for react smooth scroll on Navbar
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#1D1E1F]'>

        {/* container  */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#FADE4B]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Nathan Cruz</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a full-stack developer focused on designing and building responsive full-stack web applications.</p>
            <div>
                {/* add group to class name and span to keep hover together on button */}
                <Link to="about" smooth={true} duration={500}>
                    <button className='text-black group border-2 px-6 py-3 my-2 flex items-center bg-[#FADE4B] border-[#FADE4B] rounded-full hover:bg-[#F8E167] hover:border-[#F8E167]'>View Portfolio 
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </Link>

                {/* <button className='text-white group border-2 px-6 py-3 my-2 flex items-center bg-black border-[#FADE4B] rounded-full hover:border-white hover:shadow-md hover:shadow-[#F8E167]'>View Portfolio 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3' />
                    </span>
                </button> */}

            </div>
        </div>







    </div>
  )
}

export default Home