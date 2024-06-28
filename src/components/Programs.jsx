import React from "react";
import underline from "../assets/undernline.png";
import programsFrameImage from "../assets/programs-frame.png";
import programsImage3 from "../assets/program-image3.png";
import programsImage2 from "../assets/program-image2.png";
import programsImage1 from "../assets/program-image1.png";

const Programs = () => {
  return (
    <div className="pt-20 px-3 sm:px-9">
      <div className="programsBg max-w-[1440px] min-h-[944px] mt-10 bg-emerald-50 mx-auto flex items-center justify-center">
        <div className="max-w-5xl mx-auto py-10 h-auto flex flex-col justify-evenly gap-5">
          <h1 className="homeHeading sm:p-0 text-3xl mt-16 sm:mt-0 sm:text-4xl font-semibold text-gray-800 text-center leading-normal">
            Customisable Expert{" "}
            <span className="relative">
              Curated
              <img
                className="absolute sm:w-auto w-24 -bottom-2 right-0"
                src={underline}
                alt="underline image"
              />
            </span>{" "}
            Programs{" "}
          </h1>
          <p className="text-center text-[17px] sm:text-[19px] px-10 sm:px-40 text-gray-500">
            These programs work on applied neurological science. Our experts
            have curated each program with the knowledge and insights from
            decades of experience.
          </p>
          <div className="flex sm:flex-row flex-col sm:gap-0 gap-16 items-center justify-between mt-6">
            <div className="max-w-[302px] w-full flex flex-col gap-2">
              <div className="relative w-[294px] h-[294px]">
                <img
                  className="w-full h-full"
                  src={programsFrameImage}
                  alt="programs frame image"
                />
                <img
                  className="absolute top-6 left-6"
                  src={programsImage3}
                  alt="programs image"
                />
              </div>
              <h2 className="pl-5 text-xl leading-normal font-bold text-gray-800">
                Emotional Intelligence
              </h2>
              <p className="pl-5 text-[18px] text-gray-500">
                Children with higher emotional intelligence are better able to
                pay attention. Take a trial program now!
              </p>
              <p className="pl-5 text-red-500 text-[17px] hover:underline transition-all duration-200 ease-in cursor-pointer">
                See all programs
              </p>
            </div>
            <div className="max-w-[302px] w-full flex flex-col gap-2">
              <div className="relative w-[294px] h-[294px]">
                <img
                  className="w-full h-full"
                  src={programsFrameImage}
                  alt="programs frame image"
                />
                <img
                  className="absolute top-6 left-6"
                  src={programsImage1}
                  alt="programs image"
                />
              </div>
              <h2 className="pl-5 text-xl leading-normal font-bold text-gray-800">
                Special Program
              </h2>
              <p className="pl-5 text-[18px] text-gray-500">
                Children with higher emotional intelligence are better able to
                pay attention. Take a trial program now!
              </p>
              <p className="pl-5 text-red-500 text-[17px] hover:underline transition-all duration-200 ease-in cursor-pointer">
                See all programs
              </p>
            </div>
            <div className="max-w-[302px] w-full flex flex-col gap-2">
              <div className="relative w-[294px] h-[294px]">
                <img
                  className="w-full h-full"
                  src={programsFrameImage}
                  alt="programs frame image"
                />
                <img
                  className="absolute top-6 left-6"
                  src={programsImage2}
                  alt="programs image"
                />
              </div>
              <h2 className="pl-5 text-xl leading-normal font-bold text-gray-800">
                Regular Program
              </h2>
              <p className="pl-5 text-[18px] text-gray-500">
                Children with higher emotional intelligence are better able to
                pay attention. Take a trial program now!
              </p>
              <p className="pl-5 text-red-500 text-[17px] hover:underline transition-all duration-200 ease-in cursor-pointer">
                See all programs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
