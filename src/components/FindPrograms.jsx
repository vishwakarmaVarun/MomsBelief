import React from "react";

const FindPrograms = () => {
  return (
    <div className="sm:p-8 p-3"> {/* Adjusted padding for smaller screens */}
        <div className="programsBg max-w-[1440px] bg-emerald-50 sm:p-8 mx-auto w-full sm:pt-20 pt-20">
          <h1 className="homeHeading sm:text-4xl text-3xl font-semibold text-gray-800 leading-tight text-center">
            Got More Questions?
          </h1>
          <h1 className="homeHeading sm:text-4xl text-3xl font-semibold text-gray-800 leading-tight text-center">
            Talk To Our Experts
          </h1>
          <p className="sm:text-[19px] text-[18px] leading-tight mt-5 text-center sm:px-56 px-4 font-sans text-gray-500">
            These programs work on applied neurological science. Our experts
            have curated each program with the knowledge
          </p>
          <div className="w-full sm:bg-white bg-transparent rounded-xl p-8 sm:mt-10">
            <h2 className="text-[1.2rem] text-center tracking-wider font-bold text-gray-800 sm:p-0 px-4">
              Find the best program for your child
            </h2>
            <form className="flex flex-col gap-6 sm:mt-10 mt-5">
              <div className="flex sm:flex-row flex-col sm:items-center justify-between gap-4">
                {/* Changed gap-10 to gap-4 to reduce spacing and prevent overflow */}
                <div className="flex flex-col flex-1">
                  <label className="mb-2 text-gray-600 font-bold">
                    Your Name
                  </label>
                  <input
                    className="p-3 border text-[17px] border-gray-300 rounded-lg outline-none w-full"
                    /* Added w-full to make input take full width */
                    type="text"
                    placeholder="Enter your Name"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label className="mb-2 text-gray-600 font-bold">
                    Your Child's Name
                  </label>
                  <input
                    className="p-3 border text-[17px] border-gray-300 rounded-lg outline-none w-full"
                    /* Added w-full to make input take full width */
                    type="text"
                    placeholder="Enter your child's Name"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label className="mb-2 text-gray-600 font-bold">
                    Child's Age
                  </label>
                  <input
                    className="p-3 border text-[17px] border-gray-300 rounded-lg outline-none w-full"
                    /* Added w-full to make input take full width */
                    type="text"
                    placeholder="Enter child's age"
                  />
                </div>
              </div>
              <div className="flex sm:flex-row flex-col sm:gap-4 gap-6 justify-between sm:items-center">
                {/* Adjusted gaps for better responsiveness */}
                <div className="flex flex-col flex-1">
                  <label className="mb-2 text-gray-600 font-bold">
                    E-mail id
                  </label>
                  <input
                    className="p-3 border text-[17px] border-gray-300 rounded-lg outline-none w-full"
                    /* Added w-full to make input take full width */
                    type="email"
                    placeholder="Enter email id"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label className="mb-2 text-gray-600 font-bold">
                    Mobile Number
                  </label>
                  <input
                    className="p-3 border text-[17px] border-gray-300 rounded-lg outline-none w-full"
                    /* Added w-full to make input take full width */
                    type="text"
                    placeholder="Enter mobile no."
                  />
                </div>
              </div>
              <button className="max-w-xs mx-auto rounded-full px-8 py-2 bg-teal-800 text-blue-50 text-[17px] font-semibold hover:opacity-85 transition-all duration-200 ease-in">
                {/* Added max-w-xs and mx-auto to center the button and constrain its width */}
                Request a Call
              </button>
            </form>
            <p className="text-[16px] mt-2 text-center px-4 sm:px-14 font-sans text-gray-500">
              {/* Adjusted padding for smaller screens */}
              We'll keep your information private & secure
            </p>
          </div>
        </div>
    </div>
  );
};

export default FindPrograms;


