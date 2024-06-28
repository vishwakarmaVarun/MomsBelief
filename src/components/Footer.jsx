// import React from 'react'
// import logo from '../assets/logo.png'
// import { FaFacebook } from "react-icons/fa";
// import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
// import footerImage from '../assets/footer-image.png'
// import { PiCopyright } from "react-icons/pi";

// const Footer = () => {
//   return (
//     <div className='borderFooter bg-emerald-50 max-w-[1440px] h-[30rem] mx-auto p-12 mt-28'>
//         <div className='relative flex gap-40 border-b-2 border-slate-300 p-6'>
//             <img className='absolute top-[54%] right-28' src={footerImage} alt="footer image" />
//             <div className='w-[23rem]'>
//                 <img className='mb-10' src={logo} alt="logo image" />
//                 <h2 className='font-bold text-blue-950 text-xl mb-4'>Let's stay in touch</h2>
//                 <p className='text-[1.1rem] text-gray-500 mb-3'>Be it your child's academic issues, teenage troubles, developmental queries, their future concerns, your relationship with them, or your own mental peace as a parent.</p>
//                 <div className='flex items-center gap-4'>
//                     <FaFacebook size={23} />
//                     <AiFillTwitterCircle size={24} />
//                     <AiFillInstagram size={24} />
//                 </div>
//             </div>
//             <div className='flex flex-1 gap-40'>
//                 <div className='flex flex-col gap-4'>
//                     <h1 className='text-[1.1rem] font-bold'>Company</h1>
//                     <ul className='flex flex-col gap-3 text-gray-600'>
//                         <li className='hover:underline transition-all duration-300 ease-in'>Home</li>
//                         <li className='hover:underline transition-all duration-300 ease-in'>About Us</li>
//                         <li className='hover:underline transition-all duration-300 ease-in'>Our Team</li>
//                         <li className='hover:underline transition-all duration-300 ease-in'>Contact Us</li>
//                         <li className='hover:underline transition-all duration-300 ease-in'>Careers</li>
//                         <li className='hover:underline transition-all duration-300 ease-in'>News room</li>
//                     </ul>
//                 </div>
//                 <div className='flex flex-col gap-4'>
//                     <h1 className='text-[1.1rem] font-bold'>Resources</h1>
//                     <ul className='flex flex-col gap-3 text-gray-600'>
//                         <li className='hover:underline transition-all duration-300 ease-in'>Blogs</li>
//                         <li className='hover:underline transition-all duration-300 ease-in'>FAQs</li>
//                         <li className='hover:underline transition-all duration-300 ease-in'>Terms & Conditions</li>
//                         <li className='hover:underline transition-all duration-300 ease-in'>Return & Refund Policy</li>
//                         <li className='hover:underline transition-all duration-300 ease-in'>Privacy Policy</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//         <p className='flex items-center tracking-wide text-sm text-gray-600 justify-center gap-1 h-24'>Copyright <PiCopyright /> {new Date().getFullYear()} Mom's Belief. A unit of Rays of Belief Pvt Ltd.</p>
//     </div>
//   )
// }

// export default Footer

import React from "react";
import logo from "../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import footerImage from "../assets/footer-image.png";
import { PiCopyright } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="borderFooter bg-emerald-50 max-w-[1440px] mx-auto p-6 sm:p-12 mt-28">
      {/* Adjusted padding for smaller screens */}
      <div className="relative flex flex-col sm:flex-row gap-6 sm:gap-40 border-b-2 border-slate-300 p-6">
        {/* Adjusted flex direction and gap for smaller screens */}
        <img
          className="absolute hidden sm:inline top-[54%] right-8"
          src={footerImage}
          alt="footer image"
        />
        {/* Adjusted positioning for smaller screens */}
        <div className="w-full sm:w-[23rem]">
          <img className="mb-10" src={logo} alt="logo image" />
          <h2 className="font-bold text-blue-950 text-xl mb-4">
            Let's stay in touch
          </h2>
          <p className="text-[1rem] sm:text-[1.1rem] text-gray-500 mb-3">
            {/* Adjusted text size for smaller screens */}
            Be it your child's academic issues, teenage troubles, developmental
            queries, their future concerns, your relationship with them, or your
            own mental peace as a parent.
          </p>
          <div className="flex items-center gap-4">
            <FaFacebook size={23} />
            <AiFillTwitterCircle size={24} />
            <AiFillInstagram size={24} />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row flex-1 gap-6 sm:gap-40">
          {/* Adjusted flex direction and gap for smaller screens */}
          <div className="flex flex-col gap-2 sm:gap-4">
            <h1 className="text-[1.1rem] font-bold">Company</h1>
            <ul className="flex flex-col gap-1 sm:gap-3 text-gray-600">
              <li className="hover:underline transition-all duration-300 ease-in">
                Home
              </li>
              <li className="hover:underline transition-all duration-300 ease-in">
                About Us
              </li>
              <li className="hover:underline transition-all duration-300 ease-in">
                Our Team
              </li>
              <li className="hover:underline transition-all duration-300 ease-in">
                Contact Us
              </li>
              <li className="hover:underline transition-all duration-300 ease-in">
                Careers
              </li>
              <li className="hover:underline transition-all duration-300 ease-in">
                News room
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 sm:gap-4">
            <h1 className="text-[1.1rem] font-bold">Resources</h1>
            <ul className="flex flex-col gap-1 sm:gap-3 text-gray-600">
              <li className="hover:underline transition-all duration-300 ease-in">
                Blogs
              </li>
              <li className="hover:underline transition-all duration-300 ease-in">
                FAQs
              </li>
              <li className="hover:underline transition-all duration-300 ease-in">
                Terms & Conditions
              </li>
              <li className="hover:underline transition-all duration-300 ease-in">
                Return & Refund Policy
              </li>
              <li className="hover:underline transition-all duration-300 ease-in">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center tracking-wide text-sm text-gray-600 pt-5">
        Copyright &#169; {new Date().getFullYear()} Mom's Belief. A
        unit of Rays of Belief Pvt Ltd.
      </p>
    </div>
  );
};

export default Footer;
