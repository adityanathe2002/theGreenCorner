import React, { useState } from "react";
import { FaAngleRight, FaArrowRight, FaHeart } from "react-icons/fa"; // Import heart icon from react-icons
import Img1 from "../../../assets/plant/indoorplants.jpg";
import Img2 from "../../../assets/plant/alocasia-polly-plant.jpg";
import Img3 from "../../../assets/plant/peace-lily.png";
import { Link } from "react-router-dom";

const Section3 = () => {
  const [wishlist, setWishlist] = useState([false, false, false]); // Tracks wishlist status for each plant

  const plants = [
    {
      img: Img1,
      plantName: "Fiddle Leaf Fig",
      plantPrice: 1500,
      discountPrice: 1200,
      rating: 4.5,
    },
    {
      img: Img2,
      plantName: "Alocasia Polly Plant",
      plantPrice: 800,
      discountPrice: 650,
      rating: 4.5,
    },
    {
      img: Img3,
      plantName: "Peace Lily Plant",
      plantPrice: 1000,
      discountPrice: 850,
      rating: 4.0,
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Full stars
    const halfStar = rating % 1 >= 0.5; // Half star if the remainder is ≥ 0.5
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Remaining empty stars

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, index) => (
          <span key={`full-${index}`} className="text-yellow-500">★</span>
        ))}
        {halfStar && <span className="text-yellow-500">☆</span>}
        {[...Array(emptyStars)].map((_, index) => (
          <span key={`empty-${index}`} className="text-gray-400">★</span>
        ))}
      </div>
    );
  };

  const toggleWishlist = (index) => {
    const updatedWishlist = [...wishlist];
    updatedWishlist[index] = !updatedWishlist[index];
    setWishlist(updatedWishlist);
  };

  return (
    <div className="p-4 m-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Best Seller Products</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {plants.map((plant, index) => (
          <div
            key={index}
            className="relative p-2 w-full max-w-sm border flex flex-col items-start rounded-lg shadow-lg bg-white"
          >
            {/* Sale Badge */}
            <div className="absolute top-5 left-3 bg-yellow-300 text-black text-xs font-semibold px-2 py-1 rounded">
              Sale!
            </div>

            {/* Wishlist Icon */}
            <div
              onClick={() => toggleWishlist(index)}
              className="absolute top-5 right-5 cursor-pointer"
            >
              <FaHeart
                size={20}
                className={`${
                  wishlist[index] ? "text-red-500" : "text-gray-400"
                } transition-colors duration-200`}
              />
            </div>

            <img
              src={plant.img}
              alt={plant.plantName}
              className="w-full h-[70%] rounded-lg shadow-lg object-cover"
            />
            <h2 className="text-lg font-semibold mt-4">{plant.plantName}</h2>
            <div className="flex items-center gap-2 mt-2">
              <p className="text-gray-500 line-through">₹{plant.plantPrice}</p>
              <p className="text-green-600 font-bold">₹{plant.discountPrice}</p>
            </div>
            <div className="flex gap-3 items-center justify-between mt-1 w-full">
              <button className="px-2 py-1 bg-[#163020] text-white text-sm font-semibold rounded-md">
                Add To Cart
              </button>
              <div className="text-2xl">{renderStars(plant.rating)}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full h-[10vh] mt-10  items-center justify-center">
        <button className="flex h-[70%] items-center justify-center shadow-md  text-xl px-6 py-2 bg-[#163020] text-white rounded-md gap-1"> <Link to='/navbar/allplant'>Explore more </Link> <FaAngleRight className="mt-1"/> </button>
      </div>
    </div>
  );
};

export default Section3;
