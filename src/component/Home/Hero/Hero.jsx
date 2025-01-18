import React, { useEffect, useRef } from "react";
import HeroImg from "../../../assets/plant/Green Modern Gardening Presentation.png";
import gsap from "gsap";

const Hero = () => {

    const textRef = useRef(null); 
    useEffect(() => {
        // Animate the text to move from bottom to top
        gsap.fromTo(
            textRef.current, 
          { y: 100, opacity: 0 }, // Start position (50px down, invisible)
          { y: 0, opacity: 1, duration: 3, ease: "power3.out" } // End position (default position, fully visible)
        );
      }, [])

    return (
        <div className="relative h-screen bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 ">
            {/* Background Image */}
            <img
                src={HeroImg}
                alt="Gardening"
                className="absolute inset-0 w-full h-full object-fill "
            />

            {/* Overlay (Darkens Image for Text Visibility) */}
            <div className="absolute"></div>

            {/* Content */}
            <div  ref={textRef} className="relative z-10 w-[70%] flex flex-col justify-center h-full text-left px-8 lg:px-16">
                {/* Heading */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
                    <h1 className="flex flex-wrap gap-2">
                        <p className="text-black">Nurture</p>
                        <p className="text-[#85D178]">Your Home</p>
                        <p className="text-black">with</p>
                        <p className="text-black">Our Beautiful</p>
                        <p className="text-[#85D178]">Plants</p>
                    </h1>
                </div>

                {/* Description */}
                <p className="mt-4 text-base sm:text-lg lg:text-xl text-black">
                    Explore a wide variety of plants, from indoor favorites to outdoor gems.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <button className="px-6 py-3 bg-green-700 text-white rounded-md shadow-md hover:bg-green-800">
                        Explore More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
