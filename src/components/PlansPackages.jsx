import React from 'react'

const PlansPackages = () => {
  return (
    <div className='pt-16 mt-10 flex flex-col items-center gap-5'>
        <h1 className='homeHeading text-4xl font-semibold text-gray-800 leading-tight text-center'>Plans & Packages</h1>
        <p className="text-[19px] text-center px-[27rem] font-sans text-gray-500">These programs work on applied neurological science. Our experts have curated each program with the knowledge</p>
        <div className='max-w-6xl mx-auto'>
          <div className='w-full flex items-center gap-3'>
            <div className='flex flex-grow flex-col items-center gap-3 py-6 px-7 bg-yellow-400'>
                <p className='text-3xl font-semibold text-blue-950'>&#8377;5,200</p>
                <p className='text-[18px] text-blue-950'>for 8 session per month</p>
            </div>
            <div className='flex flex-grow flex-col items-center gap-3 py-4 px-7 bg-yellow-100'>
              <p className='text-3xl font-semibold text-blue-950'>&#8377;7,200</p>
              <p className='text-[17px] text-blue-950'>for 12 session per month</p>
            </div>
            <div className='flex flex-grow flex-col items-center gap-3 py-4 px-7 bg-yellow-100'>
              <p className='text-3xl font-semibold text-blue-950'>&#8377;14,400</p>
              <p className='text-[18px] text-blue-950 font-medium'>for 24 session</p>
            </div>
            <div className='flex flex-grow flex-col items-center gap-3 py-4 px-7 bg-yellow-100'>
              <p className='text-3xl font-semibold text-blue-950'>&#8377;16,200</p>
              <p className='text-[18px] text-blue-950 font-medium'>for 36 session</p>
            </div>
          </div>
          <div className='w-full border-2 border-yellow-300 p-8'>
            <h2 className='text-xl font-medium tracking-wide mb-7'>Program Package Includes</h2>
            <ul className='grid grid-cols-3 list-disc gap-7 px-5'>
              <li className='text-[18px] text-red-600'><span className='text-gray-600'>Minimum 14 Therapy Sessions</span></li>
              <li className='text-[18px] text-red-600'><span className='text-gray-600'>Free access to the Exclusive Webinars</span></li>
              <li className='text-[18px] text-red-600'><span className='text-gray-600'>12 Couselling Sessions</span></li>
              <li className='text-[18px] text-red-600'><span className='text-gray-600'>10% OFF on all the center services</span></li>
              <li className='text-[18px] text-red-600'><span className='text-gray-600'>Access to community WhatsApp group</span></li>
              <li className='text-[18px] text-red-600'><span className='text-gray-600'>12 Q&A Sessions</span></li>
              <li className='text-[18px] text-red-600'><span className='text-gray-600'>12 Resource Kits</span></li>
              <li className='text-[18px] text-red-600'><span className='text-gray-600'>2 Exclusive Expert Sessions Per Quarter</span></li>
            </ul>
          </div>
        </div>
        <button className='max-w-40 rounded-full px-8 py-2 bg-teal-800 text-blue-50 text-[17px] font-semibold hover:opacity-85 transition-all duration-200 ease-in'>Enroll now</button>
        <p className='text-gray-600 text-[16px]'>Get 2 Week Free Access</p>
    </div>
  )
}

export default PlansPackages