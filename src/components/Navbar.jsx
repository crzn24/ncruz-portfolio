import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo3.png'
import {Link} from 'react-scroll'
import resumepdf from '../assets/NCRUZ-DEV-RESUME2023.pdf'

const Navbar = () => {
  // keep state
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav) //Sets value of nav to its opposite value. If true will set it to true, and vice versa. Function is used for hamburger mobile menu to close after selecting item.

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1D1E1F] text-gray-300'>
      {/* logo */}
      <div>
        <Link to="home" smooth={true} duration={500}>
          <img src={Logo} alt="logo image" style={{width: '75px'}} className='hover:scale-110 duration-500'/>
        </Link>
      </div>

      {/* menu */}
        {/* anything above medium 700 px will display menu */}
      {/* <div className='hidden md:flex'> */}
        <ul className='hidden md:flex'>
          <li className='rounded-full hover:scale-110 hover:shadow-md hover:shadow-white duration-500'>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='rounded-full hover:scale-110 hover:shadow-md hover:shadow-white duration-500'>
            <Link to="about" smooth={true} duration={500}>
              About Me
            </Link>
          </li>
          <li className='rounded-full hover:scale-110 hover:shadow-md hover:shadow-white duration-500'>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className='rounded-full hover:scale-110 hover:shadow-md hover:shadow-white duration-500'>
            <Link to="work" smooth={true} duration={500}>
              Portfolio
            </Link>
          </li>
          <li className='rounded-full hover:scale-110 hover:shadow-md hover:shadow-white duration-500'>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
          <li className='rounded-full hover:scale-110 hover:shadow-md hover:shadow-white duration-500'>
            <Link to="resume" smooth={true} duration={500}>
              Resume
            </Link>
          </li>
        </ul>
      {/* </div> */}

      {/* hamburger menu */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
        {/* ternary operator */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#1D1E1F] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl hover:scale-110 duration-500 hover:underline decoration-gray-100/75'>
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl hover:scale-110 duration-500 hover:underline decoration-gray-100/75'>
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About Me
          </Link>
        </li>
        <li className='py-6 text-4xl hover:scale-110 duration-500 hover:underline decoration-gray-100/75'>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl hover:scale-110 duration-500 hover:underline decoration-gray-100/75'>
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li className='py-6 text-4xl hover:scale-110 duration-500 hover:underline decoration-gray-100/75'>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className='py-6 text-4xl hover:scale-110 duration-500 hover:underline decoration-gray-100/75'>
          <Link onClick={handleClick} to="resume" smooth={true} duration={500}>
            Resume
          </Link>
        </li>
      </ul>

      {/* social icons */}
        {/* on hover will show the name of link with ml and hover */}
      <div className='hidden lg:flex flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='https://www.linkedin.com/in/nathancruz-/'>
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='https://github.com/crzn24'>
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='mailto:cruzn@uw.edu'>
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href={resumepdf}>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar