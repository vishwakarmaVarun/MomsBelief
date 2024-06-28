import React from 'react';
import logo from '../assets/logo.png';
import sidebar from '../assets/header-sidebar.png';
import headernew from '../assets/header-new.png';

const Header = () => {
  return (
    <div>
      {/* Top bar for language and contact information */}
      <div className='bg-black text-white sm:flex items-center justify-between px-4 sm:px-10 py-1 hidden'>
        <div>
          <h3 className='text-[12px] sm:text-[13px]'>Language: <span className='font-semibold'>English</span></h3>
        </div>
        <div>
          <p className='text-[12px] sm:text-[13px]'>Need a consultation? Do you want to talk to an expert? Call us: <span className='font-semibold'>+91 90155-00061</span></p>
        </div>
      </div>

      {/* Main header section */}
      <div className='bg-amber-100 flex items-center justify-between py-4 px-4 sm:px-10'>
        <div className='flex items-center sm:gap-4'>
          <img className='cursor-pointer sm:w-auto' src={sidebar} alt="header-sidebar-icon" />
          <img className='w-32 sm:w-auto ml-[26vw] sm:ml-0' src={logo} alt="logo-icon" />
        </div>
        <div className='hidden sm:flex items-center gap-5'>
          <h3 className='text-blue-950 font-semibold cursor-pointer'>Programs</h3>
          <h3 className='relative text-blue-950 font-semibold cursor-pointer'>
            Emotional Intelligence
            <img className='absolute -top-3 right-0 brightness-105' src={headernew} alt="new icon" />
          </h3>
          <h3 className='text-blue-950 font-semibold cursor-pointer'>Assessments</h3>
          <h3 className='text-blue-950 font-semibold cursor-pointer'>Centres</h3>
        </div>
        <div className='hidden sm:flex items-center gap-4'>
          <button className='border border-teal-800 rounded-full px-4 sm:px-6 py-2 text-teal-800 font-semibold hover:bg-blue-50 transition-all duration-200 ease-in'>
            Login
          </button>
          <button className='rounded-full px-4 sm:px-6 py-2 bg-teal-800 text-blue-50 font-semibold hover:opacity-85 transition-all duration-200 ease-in'>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
