import React from "react";
import Img1 from "../../../assets/plant/OutDoorPlants.jpg";
import Img2 from "../../../assets/plant/indoorplants.jpg";
import Img3 from "../../../assets/plant/Hanging Plants.jpg";
import Img4 from "../../../assets/plant/flowering plants.webp";
import Img5 from "../../../assets/plant/Low Light Plants.jpg";

const Section2 = () => {
  return (
    <div className="bg-white m-4 py-10">
      <div className="container mx-auto px-4">
        {/* Title Section */} 
        <div className="text-center mb-8">
          <h1 className="text-base md:text-lg text-green-500">
            All Kinds of Plants
          </h1>
          <p className="text-3xl text-black font-semibold mt-2">
            Creating a Beautiful Balcony Garden
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="flex items-center justify-center">
            <div className="w-full h-[400px]  flex items-center justify-center">
              {/* Placeholder for content */}
              {/* <p className="text-gray-500">Feature or image here</p> */}
              <img src={Img1} className="w-[90%] h-full object-conatin rounded-xl" alt="" />
            </div>
          </div>

          {/* Right Section */}
          <div className="md:col-span-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="w-full h-48 flex  items-center justify-center">
                <img
                  src={Img2}
                  alt="Money-back guarantee"
                  className="w-[90%] h-full rounded-lg object-cover"
                />
              </div>
              <div className="w-full h-48 flex items-center  justify-center">
                <img
                  src={Img3}
                  alt="Easy return policy"
                  className="w-[90%] h-full rounded-lg object-cover"
                />
              </div>
              <div className="w-full h-48  flex items-center  justify-center">
                <img
                  src={Img4}
                  alt="Customer support"
                  className="w-[90%] h-full rounded-lg object-cover"
                />
              </div>
              <div className="w-full h-48   flex justify-center">
                <img
                  src={Img5}
                  alt="Quality assurance"
                  className="w-[90%] h-full rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
