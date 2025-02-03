import React, { useEffect, useState } from 'react';
import { FaFaceFlushed, FaLifeRing, FaLocationPin, FaStar, FaThumbsDown } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';
import water from '../../assets/InfoLogo/water.png';
import logo2 from '../../assets/InfoLogo/logo2.png';
import logo3 from '../../assets/InfoLogo/logo3.png';
import logo4 from '../../assets/InfoLogo/logo4.png';
import fullsun from '../../assets/lightmode/sunshine.gif';
import sunset from '../../assets/lightmode/sunset.gif';
import partial from '../../assets/lightmode/partial.png';
import leaf from '../../assets/lightmode/leaf2.jpeg';
import leaf5 from '../../assets/lightmode/leaf5.jpeg';
import { FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa';
import axios from 'axios';


const PlantDesc = () => {
  const location = useLocation();
  const { plant } = location.state; // Access the plant data from state
  const [openDropdown, setOpenDropdown] = useState(null); // Tracks which dropdown is open
  const [selectedImage, setSelectedImage] = useState([0]);
  const [likes, setLikes] = useState();
  const [dislikes, setDisLikes] = useState()




  const handleAction = (type) => {
    if (type === "likes") {
      setLikes((prevLikes) => prevLikes + 1); // Increment likes
    } else if (type === "dislikes") {
      setDisLikes((prevDislikes) => prevDislikes + 1); // Increment dislikes
    }
  };





  const handleAddToCart = async (plant) => {
    try {
        // Step 1: Fetch current cart items
        const cartResponse = await axios.get('http://localhost:4343/cart');
        const cartItems = cartResponse.data;

        // Step 2: Check if the plant is already in the cart
        const existingPlant = cartItems.find(item => item.plantId === plant.id);

        if (existingPlant) {
            // If the plant is already in the cart, show an alert
            alert(`${plant.name} is already in the cart!`);
        } else {
            // If the plant is not in the cart, add it
            const addResponse = await axios.post('http://localhost:4343/cart', {
                plantId: plant.id,
                name: plant.name,
                price: plant.price,
                image: plant.secondaryImages,
                quantity: 1 // Default quantity as 1
            });

            if (addResponse.status === 200 || addResponse.status === 201) {
                alert(`${plant.name} added to cart successfully!`);
            } else {
                alert(`Failed to add ${plant.name} to cart.`);
            }
        }
    } catch (error) {
        console.error('Error managing cart:', error);
        alert('Something went wrong. Please try again.');
    }
};

  


  useEffect(() => {
    if (plant.secondaryImages && plant.secondaryImages.length > 0) {
      setSelectedImage(plant.secondaryImages[0]);
    }
  }, [plant.secondaryImages]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={i < rating ? 'text-[#E36709]' : 'text-[#EDE8E7]'}
        style={{ fontSize: '20px', marginRight: '2px' }}
      >
        ★
      </span>
    ));
  };

  const getSunlightIcon = (type) => {
    switch (type) {
      case "Full Sun":
        return <img src={fullsun} alt="" style={{ borderRadius: "50%" }} />;
      case "Partial Shade":
        return <img src={sunset} alt="" style={{ borderRadius: "40%" }} />;// Partial Shade icon
      case "Indirect Light":
        return <img src={partial} alt="" style={{ borderRadius: "40%" }} />
      case "Bright, Indirect Light":
        return <img src="" alt="" />; // Indirect Light icon
      default:
        return <FaFaceFlushed className="text-gray-500 w-8 h-8" />; // Default icon
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-5 gap-5 mt-0">
      {/* First Section */}
      
      <div className="w-full flex  flex-col lg:flex-row gap-5 justify-center items-center">
        {/* Thumbnail Section */}
        <div className="flex lg:flex-col gap-3">
          {plant.secondaryImages.map((val, id) => {
            return (
              <div
                key={id}
                onMouseEnter={() => setSelectedImage(val)}
                className="w-20 h-20 border mt-3 border-gray-300 rounded-md overflow-hidden cursor-pointer hover:border-blue-500">
                <img src={val} alt="" className='object-cover ' />
              </div>
            )
          })}
        </div>

        {/* Main Display Section */}
        <div className="w-full lg:w-96 h-auto lg:h-[70vh] border rounded-md overflow-hidden flex justify-center items-center bg-gray-100">
          <img
            src={selectedImage}
            alt="Selected Product"
            className="w-[80%] h-auto lg:w-full lg:h-full object-contain"
          />
        </div>


        {/* Details Section */}
        <div className="w-full lg:w-[50%] h-auto lg:h-[70vh] border p-4 flex flex-col gap-3 bg-white rounded-lg">
          <p className="text-2xl lg:text-3xl font-bold mt-4">{plant.name}</p>
          <p className="flex">{renderStars(plant.rating)}</p>
          <h1 className='w-[50%]'>
            <p>Explore a wide variety of plants, from indoor favorites to outdoor gems.</p>
          </h1>

          <div className="flex flex-col">
            <p className="font-medium">Size :</p>
            <div className="flex gap-3">
              <p className="h-6 w-6 text-center text-white font-semibold rounded-lg bg-green-600">S</p>
              <p className="h-6 w-6 text-center text-white font-semibold rounded-lg bg-green-600">M</p>
            </div>
          </div>

          <div className="flex gap-2">
            <p className="text-gray-600 font-semibold">
              <strike>₹{plant.price}</strike>
            </p>
            <p className="text-green-600 font-semibold">₹{plant.discountPrice}</p>
          </div>

          <div className="flex gap-6">
            <button
              onClick={() => handleAddToCart(plant)}
              className="text-center px-4 py-1 rounded-lg border bg-[#163020] text-white font-semibold border-black w-40">
              Add To Cart
            </button>
            <button className="text-center px-4 py-1 rounded-lg w-40 bg-[ ] font-semibold text-white">
              Buy Now
            </button>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <p>Check Delivery Availability</p>
            <div className="flex w-full md:w-6/12 items-center border rounded-md overflow-hidden">
              <span className="px-3 text-gray-500">
                <FaLocationPin />
              </span>
              <input
                placeholder="Enter pincode"
                type="text"
                className="flex-1 w-full border-none outline-none p-2"
              />
              <button className="bg-[#163020] text-white px-4 py-2 hover:bg-blue-600">Check</button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="w-full flex flex-col lg:flex-row items justify-between gap-5 mb-5">
        {/* Description */}
        <div className='w-[100%] flex flex-col gap-4'>
          <div className="w-full lg:w-[100%] p-4 border flex flex-col gap-2 bg-[#F8F9F4] rounded-lg">
            <h1 className="font-bold text-lg">Description</h1>
            <p className="text-gray-600 text-sm font-medium">{plant.description}</p>
          </div>

          {/* categories */}
          <div className="w-full flex gap-4">
            {/* Categories Section */}
            <div className="w-[40%] h-auto p-4 border flex flex-col gap-4 bg-[#F8F9F4] rounded-lg shadow-md">
              <div className="w-full">
                <h1 className="font-bold text-lg">Categories</h1>
                <ul className="mt-2">
                  {plant.categories.map((val, i) => (
                    <li key={i} className="text-gray-600 text-sm font-medium">
                      {val}
                    </li>
                  ))}
                </ul>
                
                <h1 className="font-bold text-lg mt-5">Stock</h1>
                <h1 className=' flex gap-5'>
                  <p className=" font-semibold">Availability</p>
                  <p c>{plant.availability}</p>
                </h1>
                <h1 className='flex gap-5'>
                  <p className=" font-semibold">Quantity Available</p>
                  <p>{plant.quantityAvailable}</p>
                </h1>
               
              </div>
            </div>

            {/* Sales Details Section */}
            <div   style={{ backgroundImage: `url(${leaf5})` }} className="w-[60%] h-auto p-4 border bg-cover flex flex-col gap-0 bg-[#F8F9F4] rounded-lg shadow-md">
              <div className="w-full flex flex-col gap-2">
                <h1 className="font-bold text-lg">Last Month Sales Details</h1>
                <table className="w-full text-left border-collapse">
                  <tbody >
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Total Sales LastMonth</td>
                      <td className="py-2">{plant.totalSalesLastMonth}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Seller Name</td>
                      <td className="py-2">{plant.sellerName}</td>
                    </tr>
                  </tbody>
                </table>
                <div className=' mt-2'>
                  <h3 className="font-bold text-lg">Shipping States</h3>
                  <ul>
                    {plant.shippingStates.map((val, i) => (
                      <li key={i}  className="text-gray-600 text-sm font-medium">{val}</li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
          {/* Shoping policy */}
          <div className='bg-[#F8F9F4] w-[100%] h-auto p-4 flex flex-col gap-2 border rounded-lg'>
            <div>
              <h1 className="font-bold text-lg">Shopping Policy</h1>
              <p className='text-gray-600 text-sm font-medium'>{plant.shoppingPolicy}</p>
            </div>
            <div>
              <h1 className="font-bold text-lg">Refund Policy</h1>
              <p className='text-gray-600 text-sm font-medium'>{plant.refundPolicy}</p>
            </div>
          </div>

        </div>

        {/* Dropdowns */}
        <div  className=" w-full lg:w-[100%] flex flex-col gap-4 relative">
          
          <div  className="w-full max-w-2xl p-6  bg-white rounded-lg shadow-lg relative">
          
            {/* Top-right icon */}
            <div className="absolute top-4 right-4 ">
              <div className='w-16 h-16 rounded-full'>
                {getSunlightIcon(plant.sunlightRequirement)}
              </div>
            </div>
            
            <h1 className="text-xl font-bold mb-4 text-green-700">Plant Details</h1>
            <table className="w-full text-left border-collapse">
              
              <tbody>
                <tr className="border-b">
                  <td className="py-3 font-semibold">Sunlight Requirement</td>
                  <td className="py-3">{plant.sunlightRequirement}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Moisture Requirement</td>
                  <td className="py-2">{plant.moistureRequirement}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Soil Type</td>
                  <td className="py-2">{plant.soilType}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Season</td>
                  <td className="py-2">{plant.season}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Growth Rate</td>
                  <td className="py-2">{plant.growthRate}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Pot Size Required</td>
                  <td className="py-2">{plant.potSizeRequired}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Genus</td>
                  <td className="py-2">{plant.genus}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Local Name</td>
                  <td className="py-2">{plant.localName}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Regiona Name</td>
                  <td className="py-2">{plant.regionalName}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Biological Name</td>
                  <td className="py-2">{plant.biologicalName}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Botanical Name</td>
                  <td className="py-2">{plant.botanicalName}</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4">
              <h2 className="font-semibold">Tags</h2>
              <div className="flex gap-2 flex-wrap mt-2">
                {plant.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-green-200 text-green-800 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Reviews  */}
      <div className="w-full p-4">
        <h1 className="text-3xl text-center font-bold">Reviews</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-2 gap-4">
          {plant.reviews.map((val, i) => (
            <div
              style={{ backgroundImage: `url(${leaf})` }}
              key={i}
              className="flex flex-col items-start gap-2 border rounded-lg p-3 bg-cover bg-center relative shadow-md"
            >
              {/* Background Overlay */}
              <div className="absolute inset-0 bg-black opacity-10  rounded-lg"></div>

              <h1 className="text-gray-800 z-10 font-medium"><strong>Username:</strong> {val.username}</h1>
              <h1 className="text-gray-800 z-10 font-medium"><strong>Rating:</strong> {val.rating}</h1>
              <h1 className="text-gray-800 z-10 font-medium"><strong>Comment:</strong> {val.comment}</h1>
              <h1 className="text-gray-800 z-10 font-medium"><strong>DateTime</strong>: {val.dateTime}</h1>

              <div className="flex gap-4 z-10">
                <button onClick={() => handleAction(setLikes(likes + 1))} className="flex gap-2 text-gray-600 hover:text-blue-600">
                  <FaRegThumbsUp className="mt-1" /> {val.likes}
                </button>
                <button onClick={() => handleAction(setDisLikes(dislikes + 1))} className="flex gap-2 text-gray-600 hover:text-red-600">
                  <FaRegThumbsDown className="mt-1" />{val.dislikes}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default PlantDesc;

