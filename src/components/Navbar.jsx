import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo1.png'

const Navbar = () => {
  // keep state
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav) //sets value of nav to its opposite value. if true will set it to true, and vice versa.

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      {/* logo */}
      <div>
        <img src={Logo} alt="logo image" style={{width: '50px'}}/>
      </div>

      {/* menu */}
        {/* anything above medium 700 px will display menu */}
      {/* <div className='hidden md:flex'> */}
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>About Me</li>
          <li>Portfolio</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
      {/* </div> */}

      {/* hamburger menu */}
      <div onClick={handleClick} className='md:hidden z-10'>
        <FaBars />
      </div>

      {/* mobile menu */}
        {/* ternary operator */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About Me</li>
        <li className='py-6 text-4xl'>Portfolio</li>
        <li className='py-6 text-4xl'>Contact</li>
        <li className='py-6 text-4xl'>Resume</li>
      </ul>

      {/* social icons */}
      <div className='hidden'>

      </div>

    </div>
  )
}

export default Navbar