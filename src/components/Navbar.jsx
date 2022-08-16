import React,{useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {

  const [nav,setNav] = useState(false);
  const handdleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        {/* <img src={Logo} alt='logo' style={{ width: '60px'}} /> */}
      </div>

      {/* Menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li> 
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
        <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
        <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>


      {/* Hamburger */}
      <div onClick = {handdleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className= {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link onClick={handdleClick}to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'> 
          <Link onClick={handdleClick}to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handdleClick}to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handdleClick}to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handdleClick}to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[45px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
            <a className='flex justify-between items-center w-full text-gray-300'  href='https://www.linkedin.com/in/jakubklewicki/?originalSubdomain=pl'>
              Linkedin <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[45px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300'  href='https://github.com/Klewiu?tab=repositories'>
              GitHub<FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[45px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ff9869ff]'>
            <a className='flex justify-between items-center w-full text-gray-300'  href='mailto:kuba.klewicki@gmail.com'>
              Email <HiOutlineMail size={30}/>
            </a>
          </li>
          {/* <li className='w-[160px] h-[45px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300'  href='/'>
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li> */}
        </ul>
      </div>

    </div>
  );
}; 

export default Navbar