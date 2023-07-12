import React from 'react'

import ArtMart from '../assets/projects/ArtMart2.jpg'
// import Vapour from '../assets/projects/steam-achievement-picker.jpeg'
// import GifMe from '../assets/projects/funny_movie_gif.jpeg'
// import Planner from '../assets/projects/daily-planner-app.jpeg'
// import WeatherDashboard from '../assets/projects/5day-weather-dashboard.jpeg'
// import PasswordGenerator from '../assets/projects/password-generator-javascript-application.jpeg'
// import NoteTaker from '../assets/projects/note-taker-expressjs.jpeg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>


            {/* grid container for all of my projects */}
                {/* camelCase because CSS in React. Back ticks for template literal */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* card item container 1 */}
                <div style={{backgroundImage: `url(${ArtMart})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font bold text-white tracking-wider'>
                        ArtMart
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo/Deployed</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code/Repo</button>
                            </a>
                        </div>
                    </div>
                </div>




            </div>



        </div>
    </div>
  )
}

export default Work