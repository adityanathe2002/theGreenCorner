import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Wishlist = () => {
    const navigate = useNavigate();
    const [wishlist, setWishlist] = useState([]);

    // Fetch wishlist data from API when the component mounts
    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                const response = await axios.get('http://localhost:3000/wishlist');
                if (response.status === 200) {
                    setWishlist(response.data); // Assuming API returns an array of wishlist items
                }
            } catch (error) {
                console.error('Error fetching wishlist:', error);
            }
        };

        fetchWishlist();
    }, []);

    // Remove item from wishlist via API
    const handleRemoveFromWishlist = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/wishlist/${id}`);
            if (response.status === 200) {
                setWishlist(wishlist.filter((item) => item.id !== id));
            }
        } catch (error) {
            console.error('Error removing from wishlist:', error);
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
            {wishlist.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <div className="grid gap-6 md:grid-cols-2  lg:grid-cols-4 justify-items-center">
                    {wishlist.map((plant) => (
                        <div
                            key={plant.id}
                            className="relative p-2 w-[100%] h-auto max-w-sm border flex flex-col items-start rounded-lg shadow-lg bg-white"
                        >
                            <img
                                onClick={() => navigate('/plant-desc', { state: { plant} })}
                                src={plant.image}
                                alt={plant.name}
                                className="w-[100%] h-[70%] rounded-lg shadow-lg object-contain cursor-pointer"
                            />
                            <h2 className="text-lg font-semibold mt-4">{plant.name}</h2>
                            <h1>Rating : {plant.rating}</h1>
                            <div className="flex items-center gap-2 mt-2">
                                <p className="text-gray-500 line-through">₹{plant.price}</p>
                                <p className="text-green-600 font-bold">₹{plant.price}</p>
                            </div>
                            <button
                                onClick={() => handleRemoveFromWishlist(plant.id)}
                                className="mt-4 px-2 py-1 bg-red-500 text-white text-sm font-semibold rounded-md flex items-center gap-1"
                            >
                                <FaTrash />
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;