import React from "react";
import workSpiral from "../assets/work-spiral.png";
import workSpiral2 from "../assets/work-spiral2.png";
import workIcon1 from "../assets/workicon1.png";
import workIcon2 from "../assets/workicon2.png";
import workIcon3 from "../assets/workicon3.png";
import workIcon4 from "../assets/workicon4.png";
import workIcon5 from "../assets/workicon5.png";
import workgroupicon1 from "../assets/work-group-icon1.png";
import workgroupicon2 from "../assets/work-group-icon2.png";
import workimage from "../assets/work-image.png";
import workimage2 from "../assets/work-image2.png";
import workbordericon from '../assets/workbordericon.png'

const Work = () => {
  return (
    <div className="relative min-h-screen pt-20 mt-20 flex flex-col gap-20 sm:gap-52">
      {/* Adjusted image sizes for responsiveness */}
      <img
        className="absolute w-8 sm:w-12 top-72 sm:top-[20%] right-28 sm:right-[17%]"
        src={workgroupicon2}
        alt="icon group"
      />
      {/* Hidden image for small screens */}
      <img
        className="absolute sm:w-12 hidden sm:block bottom-[40%] right-[17%]"
        src={workgroupicon2}
        alt="icon group"
      />
      <img
        className="absolute w-16 bottom-40 right-16 sm:bottom-[20%] sm:left-[10%]"
        src={workgroupicon1}
        alt="icon group"
      />
      <img
        className="absolute top-[27%] left-12 sm:w-auto w-0 sm:left-[15%]"
        src={workimage}
        alt="work image group"
      />
      <img
        className="absolute w-0 sm:w-auto bottom-20 left-7 sm:bottom-[16%] sm:left-[70%]"
        src={workimage2}
        alt="work image group"
      />
      <div className="text-center">
        {/* Responsive text sizes and padding */}
        <h1 className="homeHeading hidden sm:block sm:text-4xl text-3xl font-semibold text-gray-800 leading-normal">
          How do we work?
        </h1>
        <h1 className="homeHeading sm:text-4xl sm:hidden text-3xl font-semibold text-gray-800 leading-normal">
          Who are we?
        </h1>
        <p className="text-center text-[18px] sm:text-[19px] px-8 sm:px-[25%] text-gray-500">
          Mom's Belief is an innovation and research-driven holistic care
          provider for children with Special Needs and operates through a
          Home-Based Program.
        </p>
      </div>
      <div className="relative max-w-[1155px] min-h-[594px] mx-auto">
        <img
          className="hidden sm:block w-full h-full"
          src={workSpiral}
          alt="work spiral image"
        />
        <img
          className="w-full h-full block sm:hidden"
          src={workSpiral2}
          alt="work spiral2 image"
        />
        <div className="absolute -top-12 sm:top-[13%] -left-1 sm:-left-16 flex flex-col items-center">
          {/* Adjusted image sizes and text for responsiveness */}
          <img className="sm:w-auto w-24" src={workIcon1} alt="work icon 1 image" />
          <span className="text-center text-sm sm:text-base">1. Talk to an <br /> expert</span>
        </div>
        <div className="absolute top-2 -right-4 sm:top-[2%] sm:-left-96 flex flex-col items-center">
          <div className="relative">
            <img src={workbordericon} alt="work border icon" />
            <img className="absolute top-[14%] left-[14%] sm:w-auto w-auto" src={workIcon2} alt="work icon 2 image" />
          </div>
          <span className="text-center text-sm sm:text-base">2. Take an <br /> assessment</span>
        </div>
        <div className="absolute top-32 -left-12 sm:top-[4%] sm:-right-[20%] flex flex-col items-center">
          <img className="sm:w-auto w-24" src={workIcon3} alt="work icon 3 image" />
          <span className="text-center text-sm sm:text-base">3. Get personalized <br /> education plan</span>
        </div>
        <div className="absolute bottom-64 -right-12 sm:-top-[5%] sm:right-[16%] flex flex-col items-center">
          <img className="sm:w-auto w-24" src={workIcon4} alt="work icon 4 image" />
          <span className="text-center text-sm sm:text-base">4. Take programs <br /> & trainings</span>
        </div>
        <div className="absolute bottom-24 left-20 sm:-top-[6%] sm:-right-[90%] flex flex-col items-center">
          <img className="sm:w-auto w-24" src={workIcon5} alt="work icon 5 image" />
          <span className="text-center text-sm sm:text-base">5. Track progress</span>
        </div>
      </div>
    </div>
  );
};

export default Work;
