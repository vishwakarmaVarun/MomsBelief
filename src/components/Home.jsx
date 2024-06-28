// import React from "react";
// import homeSpiral from "../assets/home-spiral.png";
// import underline from "../assets/undernline.png";
// import homeimage1 from "../assets/home-image1.png";
// import homeimage2 from "../assets/home-image2.png";
// import stariconimage from "../assets/icon-image.png";
// import stargroupiconimage from "../assets/home-group-icon.png";

// const Home = () => {
//   return (
//     <div>
//       <div className=" relative homebg px-2">
//         <img
//           className="hidden sm:block absolute top-[13%] smleft-[16%]"
//           src={stariconimage}
//           alt="star icon image"
//         />
//         <img
//           className="hidden sm:block absolute top-[13%] right-[16%]"
//           src={stargroupiconimage}
//           alt="star group icon image"
//         />
//         <img
//           className="absolute bottom-[3%] right-[10%] w-28 sm:w-auto sm:top-[48%] sm:right-[10%]"
//           src={homeimage1}
//           alt="home image1"
//         />
//         <img
//           className="absolute bottom-9 left-20 sm:top-[38%] sm:left-[5%] rotate-[30deg] w-32 sm:w-auto"
//           src={homeimage2}
//           alt="home image2"
//         />
//         <div className="max-w-2xl mx-auto pt-16 sm:pt-24 flex flex-col items-center gap-6 sm:gap-8">
//           <h1 className="homeHeading tracking-wide text-3xl sm:text-5xl font-semibold text-gray-800 leading-tight text-center">
//             We Empower Mom's Beliefs & Enable Child's{" "}
//             <span className="relative">
//               Growth.
//               <img
//                 className="absolute -bottom-2 left-0"
//                 src={underline}
//                 alt="underline image"
//               />
//             </span>
//           </h1>
//           <p className="relative sm:text-[20px] text-[18px] tracking-wide text-center px-12 sm:px-14 font-sans text-gray-500">
//             We are a research-driven holistic care provider for growing children
//             through a wide array of programs.
//             <img
//               className="absolute top-[90%] sm:top-[84%] right-[20%] sm:left-[69%] -rotate-[30deg] sm:rotate-0 w-16 sm:w-auto"
//               src={homeSpiral}
//               alt="spiral image"
//             />
//           </p>
//           <button className="rounded-full sm:px-8 px-6 py-2 bg-teal-800 text-blue-50 sm:text-[17px] font-semibold hover:opacity-85 transition-all duration-200 ease-in">
//             Explore Programs
//           </button>
//           <p className=" sm:text-[18px] text-[17px] tracking-wide text-center px-28 sm:px-40 text-gray-500">
//             Or Just <span className="underline">take a free assessment</span> to
//             see how is the growth of your child.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import homeSpiral from "../assets/home-spiral.png";
import underline from "../assets/undernline.png";
import homeimage1 from "../assets/home-image1.png";
import homeimage2 from "../assets/home-image2.png";
import stariconimage from "../assets/icon-image.png";
import stargroupiconimage from "../assets/home-group-icon.png";

const Home = () => {
  return (
    <div className="relative homebg px-2">
      {/* Hidden on small screens */}
      <img
        className="hidden sm:block absolute top-[13%] sm:left-[16%]"
        src={stariconimage}
        alt="star icon image"
      />
      <img
        className="hidden sm:block absolute top-[13%] right-[16%]"
        src={stargroupiconimage}
        alt="star group icon image"
      />
      {/* Adjusted image sizes for responsiveness */}
      <img
        className="absolute -bottom-[5vw] right-[11vw] w-24 sm:w-auto sm:-bottom-[3.58vw] rotate-[9deg] sm:right-[10vw]"
        src={homeimage1}
        alt="home image1"
      />
      <img
        className="absolute -bottom-[0vw] left-[11vw] sm:bottom-[2%] sm:left-[5%] rotate-6 sm:rotate-12 w-24 sm:w-auto"
        src={homeimage2}
        alt="home image2"
      />
      <div className="max-w-2xl mx-auto pt-16 sm:pt-24 flex flex-col items-center gap-6 sm:gap-8">
        {/* Responsive heading */}
        <h1 className="homeHeading tracking-wide text-3xl sm:text-5xl font-semibold text-gray-800 leading-tight text-center">
          We Empower Mom's Beliefs & Enable Child's{" "}
          <span className="relative">
            Growth.
            <img
              className="absolute -bottom-2 left-0 w-full sm:w-auto"
              src={underline}
              alt="underline image"
            />
          </span>
        </h1>
        {/* Responsive text sizes and padding */}
        <p className="relative sm:text-[20px] text-[18px] tracking-wide text-center px-4 sm:px-14 font-sans text-gray-500">
          We are a research-driven holistic care provider for growing children
          through a wide array of programs.
          <img
            className="absolute sm:top-[84%] sm:left-[69%] -rotate-[30deg] sm:rotate-0 w-0 sm:w-auto"
            src={homeSpiral}
            alt="spiral image"
          />
        </p>
        {/* Responsive button */}
        <button className="rounded-full sm:px-8 px-6 py-2 bg-teal-800 text-blue-50 sm:text-[17px] font-semibold hover:opacity-85 transition-all duration-200 ease-in">
          Explore Programs
        </button>
        {/* Responsive text sizes and padding */}
        <p className="sm:text-[18px] text-[17px] tracking-wide text-center px-4 sm:px-40 text-gray-500">
          Or Just <span className="underline">take a free assessment</span> to
          see how is the growth of your child.
        </p>
      </div>
    </div>
  );
};

export default Home;
