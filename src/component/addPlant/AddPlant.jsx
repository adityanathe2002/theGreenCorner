import axios from "axios";
import React, { useEffect, useState } from "react";

const AddPlant = () => {
  let [tags, setTags] = useState([]);
  let [categories, setCategories] = useState([]);
  let [shippingStates, setShippingStates] = useState([]);
  let [secondaryImages, setSecondaryImages] = useState([]);
  let [reviews, setReviews] = useState([]);

  let [newPlant, setNewPlant] = useState({
    name: "",
    id: Date.now(),
    description: "",
    price: "",
    rating: "",
    reviews: reviews,
    totalSalesLastMonth: "",
    sellerName: "",
    availability: "",
    quantityAvailable: "",
    categories: categories,
    sunlightRequirement: "",
    moistureRequirement: "",
    soilType: "",
    season: "",
    growthRate: "",
    potSizeRequired: "",
    genus: "",
    localName: "",
    regionalName: "",
    biologicalName: "",
    botanicalName: "",
    tags: tags,
    shippingStates: shippingStates,
    primaryImage: "",
    secondaryImages: secondaryImages,
    shoppingPolicy: "",
    refundPolicy: "",
  });


  useEffect(() => {
    axios.get("http://localhost:8000/plants").then((res) => {
       
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPlant({ ...newPlant, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newPlant);
  };

  return (
    <div className="w-full flex flex-col items-center mt-10 mb-10">
      <h2 className="text-2xl font-bold mb-5">Add a New Plant</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-[60%] border border-gray-300 p-5 rounded-lg shadow-md flex flex-col gap-4"
      >
        {/* Plant Name & Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Name:</label>
            <input
              type="text"
              name="name"
              value={newPlant.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Description:</label>
            <textarea
              name="description"
              value={newPlant.description}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Price & Rating */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Price:</label>
            <input
              type="text"
              name="price"
              value={newPlant.price}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Rating:</label>
            <input
              type="text"
              name="rating"
              value={newPlant.rating}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Seller & Availability */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Seller Name:</label>
            <input
              type="text"
              name="sellerName"
              value={newPlant.sellerName}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Availability:</label>
            <input
              type="text"
              name="availability"
              value={newPlant.availability}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Sunlight & Moisture */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Sunlight Requirement:</label>
            <input
              type="text"
              name="sunlightRequirement"
              value={newPlant.sunlightRequirement}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Moisture Requirement:</label>
            <input
              type="text"
              name="moistureRequirement"
              value={newPlant.moistureRequirement}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Botanical & Biological Names */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Biological Name:</label>
            <input
              type="text"
              name="biologicalName"
              value={newPlant.biologicalName}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Botanical Name:</label>
            <input
              type="text"
              name="botanicalName"
              value={newPlant.botanicalName}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Tags & Shipping */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Tags:</label>
            <input
              type="text"
              name="tags"
              value={newPlant.tags}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Shipping States:</label>
            <input
              type="text"
              name="shippingStates"
              value={newPlant.shippingStates}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Image Upload */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Primary Image URL:</label>
            <input
              type="text"
              name="primaryImage"
              value={newPlant.primaryImage}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Secondary Images URL:</label>
            <input
              type="text"
              name="secondaryImages"
              value={newPlant.secondaryImages}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 bg-[#163020] text-white py-2 px-4 rounded hover:bg-[#163030] transition duration-200"
        >
          Add Plant
        </button>
      </form>
    </div>
  );
};

export default AddPlant;
